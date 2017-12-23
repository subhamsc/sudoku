//const solveSudoku = require('./sudokuSolver.js').solveSudoku;
let emptyBoard =  [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]];

let generateSudoku = function(board){
  for (let i=0; i<5; i++) {
    let num = Math.ceil(Math.random()*9);
    let row = Math.round(Math.random()*8);
    let col = Math.round(Math.random()*8);
    if(board[row][col]==0)
    board[row][col]=num;
  }
  try {
    solveSudoku(board);
    return board;
  } catch (e) {
    generateSudoku(board);
  }
};
//console.log(generateSudoku(emptyBoard));
