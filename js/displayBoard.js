"use strict";
const DisplayBoard = function(){
  this.board = [];
};

DisplayBoard.prototype.getEmptyPosition = function(max,positions){
  let row = generateRandomNumberBetween(0,8);
  let col = generateRandomNumberBetween(0,8);
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