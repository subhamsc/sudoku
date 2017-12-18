const saveEmptyPosition = function(board){
  let emptyPositions = [];
  board.forEach(function(row,index){
    row.forEach(function(col,index2){
      if(col==0)
      emptyPositions.push([index,index2])
    });
  });
  return emptyPositions;
};

const checkRow = function(board,value,row){
  return board[row].every(function(ele){
    return ele!=value
  });
};

const checkCol = function(board,value,col){
  return board.every(function(row){
    return row[col]!=value;
  });
};

const checkSquare = function(board,value,row,col){
  let rowIndex = 0;
  let colIndex = 0;
  let squareSize = 3;
  while (col>=colIndex+squareSize){
    colIndex += squareSize;
  }
  while (row>=rowIndex+squareSize){
    rowIndex += squareSize;
  }
  for (let i=rowIndex; i<rowIndex+squareSize; i++) {
    for (let j=colIndex; j<colIndex+squareSize; j++) {
      if(board[i][j]==value)
      return false;
    }
  }
  return true;
};

const checkValue = function(board,value,row,col){
  if(checkRow(board,value,row) && checkCol(board,value,col) && checkSquare(board,value,row,col))
  return true;
  return false
};

const solvePuzzle = function(board,emptyPositions){
  let limit = 9;
  for (let i=0; i<emptyPositions.length;) {
    let row = emptyPositions[i][0];
    let col = emptyPositions[i][1];
    let value = board[row][col]+1;
    let found = false
    while (!found && value<=limit){
      if(checkValue(board,value,row,col)){
        found = true;
        board[row][col]=value;
        i++;
      } else {
        value++;
      }
    }
    if(!found){
      board[row][col]=0;
      i--;
    }
  }
  return board;
};

const solveSudoku = function(board){
  let emptyPositions = saveEmptyPosition(board);
  return solvePuzzle(board,emptyPositions);
};
