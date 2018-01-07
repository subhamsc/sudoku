// const generateRandomNumberBetween=function(x,y) {
//   return Math.floor(Math.random()*(y-x))+x;
// };

// const getRow = function(pos){
//   return Number.parseInt(pos/10);
// };

// const getCol = function(pos){
//   return pos%10;
// };

const SudokuShuffler = function(board){
  this.board = board;
};


SudokuShuffler.prototype.swapRows = function(firstRow,secondRow){
  let temp = this.board[firstRow];
  this.board[firstRow] = this.board[secondRow];
  this.board[secondRow] = temp;
};

SudokuShuffler.prototype.swapCols = function(firstCol,secondCol){
  this.board.forEach((row)=>{
    let temp = row[firstCol];
    row[firstCol] = row[secondCol];
    row[secondCol] = temp;
  });
};

SudokuShuffler.prototype.swapRowBlocks = function(initRow,swappingRow){
  for (let bolck=0; bolck<3; bolck++){
    this.swapRows(bolck+initRow,bolck+swappingRow);
  }
};

SudokuShuffler.prototype.swapColBlocks = function(initCol,swappingCol){
  for (let bolck=0; bolck<3; bolck++){
    this.swapCols(bolck+initCol,bolck+swappingCol);
  }
};

SudokuShuffler.prototype.transpose = function(){
  for (let row=0; row<9; row++){
    for (let col=row; col<9; col++){
      let temp = this.board[row][col];
      this.board[row][col] = this.board[col][row];
      this.board[col][row] = temp;
    }
  }
};

SudokuShuffler.prototype.getIndexesOf = function(ele){
  let indexes = [];
  this.board.forEach((row,rowIndex)=>{
    row.forEach((col,colIndex)=>{
      if(col==ele)
      indexes.push(''+rowIndex+colIndex);
    });
  });
  return indexes;
};

SudokuShuffler.prototype.swapNumber = function(successor,replacer){
  let  successorIndexes = this.getIndexesOf(successor);
  let replacerIndexes = this.getIndexesOf(replacer);
  successorIndexes.forEach((pos,index)=>{
    let temp = this.board[getRow(pos)][getCol(pos)];
    this.board[getRow(pos)][getCol(pos)] = this.board[getRow(replacerIndexes[index])][getCol(replacerIndexes[index])];
    this.board[getRow(replacerIndexes[index])][getCol(replacerIndexes[index])] = temp;
  });
};


SudokuShuffler.prototype.shuffleNumbers = function(){
  let firstNum = generateRandomNumberBetween(1,10);
  let secondNum = generateRandomNumberBetween(1,10);
  return this.swapNumber(firstNum,secondNum);
};

SudokuShuffler.prototype.shuffleRows = function(){
  let firstRow = generateRandomNumberBetween(0,3);
  let secondRow = generateRandomNumberBetween(0,3);
  let block = 3 * generateRandomNumberBetween(0,3);
  return this.swapRows(firstRow+block,secondRow+block);
};

SudokuShuffler.prototype.shuffleCols = function(){
  let firstCol = generateRandomNumberBetween(0,3);
  let secondCol = generateRandomNumberBetween(0,3);
  let block = 3 * generateRandomNumberBetween(0,3);
  return this.swapCols(firstCol+block,secondCol+block);
};

SudokuShuffler.prototype.shuffleRowBlocks = function(){
  let firstBlock = 3 * generateRandomNumberBetween(0,3);
  let secondBlock = 3 * generateRandomNumberBetween(0,3);
  return this.swapRowBlocks(firstBlock,secondBlock);
};

SudokuShuffler.prototype.shuffleColBlocks = function(){
  let firstBlock = 3 * generateRandomNumberBetween(0,3);
  let secondBlock = 3 * generateRandomNumberBetween(0,3);
  return this.swapColBlocks(firstBlock,secondBlock);
};

SudokuShuffler.prototype.shuffle = function(){
  this.shuffleNumbers();
  this.shuffleRows();
  this.shuffleCols();
  this.shuffleRowBlocks();
  this.shuffleColBlocks();
  return this.board;
};

// module.exports = SudokuShuffler;