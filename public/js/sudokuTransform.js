const swapRows = function(board,firstRow,secondRow){
  let temp = board[firstRow];
  board[firstRow] = board[secondRow];
  board[secondRow] = temp;
  return board;
};

const swapCols = function(board,firstCol,secondCol){
  board.forEach(function(row){
    let temp = row[firstCol];
    row[firstCol] = row[secondCol];
    row[secondCol] = temp;
  });
  return board;
};

const swapRowBlocks = function(board,initRow,swappingRow){
  for (let bolck=0; bolck<3; bolck++){
    swapRows(board,bolck+initRow,bolck+swappingRow);
  }
  return board;
};

const swapColBlocks = function(board,initCol,swappingCol){
  for (let bolck=0; bolck<3; bolck++){
    swapCols(board,bolck+initCol,bolck+swappingCol);
  }
  return board;
};

const transpose = function(board){
  for (let row=0; row<9; row++){
    for (let col=row; col<9; col++){
      let temp = board[row][col];
      board[row][col] = board[col][row];
      board[col][row] = temp;
    }
  }
  return board;
};

const getIndexesOf = function(board,ele){
  let indexes = [];
  board.forEach(function(row,rowIndex){
    row.forEach(function(col,colIndex){
      if(col==ele)
      indexes.push(''+rowIndex+colIndex);
    })
  })
  return indexes;
}

const getRow = function(pos){
  return Number.parseInt(pos/10);
};

const getCol = function(pos){
  return pos%10;
};

const replace = function(board,successor,replacer){
  let  successorIndexes = getIndexesOf(board,successor);
  let replacerIndexes = getIndexesOf(board,replacer);
  successorIndexes.forEach(function(pos,index){
    let temp = board[getRow(pos)][getCol(pos)];
    board[getRow(pos)][getCol(pos)]=board[getRow(replacerIndexes[index])][getCol(replacerIndexes[index])];
    board[getRow(replacerIndexes[index])][getCol(replacerIndexes[index])] = temp;
  });
  return board;
};

const shuffleNumbers = function(board){
  let firstNum = Math.ceil(Math.random()*9);
  let secondNum = Math.ceil(Math.random()*9);
  return replace(board,firstNum,secondNum);
};

const shuffleRows = function(board){
  let firstRow = Math.floor(Math.random()*3);
  let secondRow = Math.floor(Math.random()*3);
  let block = Math.floor(Math.random()*3);
  return swapRows(board,firstRow+block*3,secondRow+block*3);
};

const shuffleCols = function(board){
  let firstCol = Math.floor(Math.random()*3);
  let secondCol = Math.floor(Math.random()*3);
  let block = Math.floor(Math.random()*3);
  return swapCols(board,firstCol+block*3,secondCol+block*3);
};

const shuffleRowBlocks = function(board){
  let firstBlock = Math.floor(Math.random()*3);
  let secondBlock = Math.floor(Math.random()*3);
  return swapRowBlocks(board,firstBlock*3,secondBlock*3);
};

const shuffleColBlocks = function(board){
  let firstBlock = Math.floor(Math.random()*3);
  let secondBlock = Math.floor(Math.random()*3);
  return swapColBlocks(board,firstBlock*3,secondBlock*3);
};

const shuffle = function(board){
  shuffleNumbers(board);
  shuffleRows(board);
  shuffleCols(board);
  shuffleRowBlocks(board);
  shuffleColBlocks(board);
  return board;
};
