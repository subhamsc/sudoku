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

const swapNumber = function(board,successor,replacer){
  let  successorIndexes = getIndexesOf(board,successor);
  let replacerIndexes = getIndexesOf(board,replacer);
  successorIndexes.forEach(function(pos,index){
    let temp = board[getRow(pos)][getCol(pos)];
    board[getRow(pos)][getCol(pos)] = board[getRow(replacerIndexes[index])][getCol(replacerIndexes[index])];
    board[getRow(replacerIndexes[index])][getCol(replacerIndexes[index])] = temp;
  });
  return board;
};

let takeRandomNumZeroToTwo = function(){
  return Math.floor(Math.random()*3);
};

let takeRandomNumOneToNine = function(){
  return Math.ceil(Math.random()*9);
};

const shuffleNumbers = function(board){
  let firstNum = takeRandomNumOneToNine();
  let secondNum = takeRandomNumOneToNine();
  return swapNumber(board,firstNum,secondNum);
};

const shuffleRows = function(board){
  let firstRow = takeRandomNumZeroToTwo();
  let secondRow = takeRandomNumZeroToTwo();
  let block = 3 * takeRandomNumZeroToTwo();
  return swapRows(board,firstRow+block,secondRow+block);
};

const shuffleCols = function(board){
  let firstCol = takeRandomNumZeroToTwo();
  let secondCol = takeRandomNumZeroToTwo();
  let block = 3 * takeRandomNumZeroToTwo();
  return swapCols(board,firstCol+block,secondCol+block);
};

const shuffleRowBlocks = function(board){
  let firstBlock = 3 * takeRandomNumZeroToTwo();
  let secondBlock = 3 * takeRandomNumZeroToTwo();
  return swapRowBlocks(board,firstBlock,secondBlock);
};

const shuffleColBlocks = function(board){
  let firstBlock = 3 * takeRandomNumZeroToTwo();
  let secondBlock = 3 * takeRandomNumZeroToTwo();
  return swapColBlocks(board,firstBlock,secondBlock);
};

const shuffle = function(board){
  shuffleNumbers(board);
  shuffleRows(board);
  shuffleCols(board);
  shuffleRowBlocks(board);
  shuffleColBlocks(board);
  return board;
};
