// const SudokuChecker = require('./sudokuChecker.js');
// const SudokuShuffler = require('./sudokuTransform.js');
// const SudokuSolver = require('./sudokuSolver.js');

const board =  [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const SudokuGenerator = function(){
  this.board = board;
};

SudokuGenerator.prototype.generate = function(){
  new SudokuSolver(this.board).solveSudoku();
  new SudokuShuffler(this.board).shuffle();
  if(new SudokuChecker(this.board).isUniq())
  return this.board;
  this.generate();
};

// module.exports = SudokuGenerator;