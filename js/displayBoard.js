// const SudokuChecker = require('./sudokuChecker.js');
// const SudokuGenerator = require('./sudokuGenerator.js');
// const SudokuSolver = require('./sudokuSolver.js');
const DisplayBoard = function(){
  this.board = [];
};

// const generateRandomNumberBetween=function(x,y) {
//   return Math.floor(Math.random()*(y-x))+x;
// };

// const getRow = function(pos){
//   return Number.parseInt(pos/10);
// };

// const getCol = function(pos){
//   return pos%10;
// };


DisplayBoard.prototype.getEmptyPosition = function(max,positions){
  let row = generateRandomNumberBetween(0,9);
  let col = generateRandomNumberBetween(0,9);
  this.board[row][col]=0;
  max--;
  try {
    if(max<=0) return;
    new SudokuSolver(this.board).solveSudoku();
    if(new SudokuChecker(this.board).isUniq()){
      positions.push(''+row+col);
      this.getEmptyPosition(max,positions);
    }
  } catch(e){
    return;
  }
  return positions;
};
  
DisplayBoard.prototype.getBoard = function(){
  let sudoku =  new SudokuGenerator();
  this.board = sudoku.generate();
}

DisplayBoard.prototype.getDisplayBoard = function(numOfPos){
  this.getBoard();
  let emptyPos = this.getEmptyPosition(numOfPos,[]);
  emptyPos.forEach((pos)=>{
    this.board[getRow(pos)][getCol(pos)]=0;
  });
  return this.board;
};

// module.exports = DisplayBoard;