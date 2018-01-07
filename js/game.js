// const getLevel = require('./levels.js').getLevel;
// const DisplayBoard = require('./displayBoard.js');

const Game = function(){
  this.board = undefined;
  this.level = undefined;
};

Game.prototype.setBoard = function(){
  let displayBoard = new DisplayBoard()
  this.board = displayBoard.getDisplayBoard(this.level);
};

Game.prototype.getBoard = function(){
  return this.board;
};

Game.prototype.setLevel = function(mode){
  this.level = getLevel(mode);
};


// module.exports = Game;