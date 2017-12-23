const hasAllNumbersIn = function(list){
  let numbers = [1,2,3,4,5,6,7,8,9,];
  return numbers.every(function(number){
    return list.includes(number)
  });
};

const checkInRows = function(board){
  return board.every(function(row){
    return hasAllNumbersIn(row);
  });
};


const checkInCol = function(board,index,col){
  board.forEach(function(row){
    col.push(row[index]);
  });
  return hasAllNumbersIn(col);
};


const checkInCols = function(board){
  return board.every(function(row,index){
    return checkInCol(board,index,[]);
  });
};

const checkInSquare = function(board,row,col){
  let square = [];
  for (let rowIndex=row; rowIndex<row+3; rowIndex++) {
    for (let colIndex=col; colIndex<col+3; colIndex++) {
      square.push(board[rowIndex][colIndex]);
    }
  }
  return hasAllNumbersIn(square);
}

const checkInSquares = function(board){
  let squares = [];
  for (let row=0; row<9; row+=3) {
    for (let col=0; col<9; col+=3) {
      squares.push(checkInSquare(board,row,col));
    }
  }
  return squares.every(function(square){
    return square;
  });
}


const isUniq = function(board){
  return checkInRows(board) && checkInCols(board) && checkInSquares(board);
};
