let getPosId = function(pos){
  return document.getElementById(pos);
};

let getMinute = function(){
  return document.getElementById('minute');
};

let getSecond = function(){
  return document.getElementById('second');
};

let getResult = function(){
  return document.getElementById('result');
};

let getSolveId = function(){
  return document.getElementById('solve');
};

let getBoard = function(){
  return document.getElementsByClassName('board')[0];
};

let getLevelId = function(){
  return document.getElementsByClassName('levels')[0];
};

let getSudokuField = function(){
  return document.getElementsByClassName('sudokuField')[0];
};

let getResetId = function(){
  return document.getElementById('reset');
};

let getAcceptId = function(){
  return document.getElementById('accept');
};

let getNumber = function(){
  return document.getElementsByClassName('numbers')[0];
};

let setHidden = function(){
  return 'hidden';
};

let setVisible = function(){
  return 'visible';
};

let isInvalid = function(id){
  return id==null || id == 'accept';
};

let winningStatus = function(){
  return 'Congratulation right solution';
};

let lossingStatus = function(){
  return 'Ohhhhh wrong solution';
};
