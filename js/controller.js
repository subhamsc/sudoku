"use strict";
let filledPos = [];
const getFilledBoard = function(){
  let filledSudoku = [];
  for(let rowIndex=0; rowIndex<9; rowIndex++){
    let row = [];
    for(let colIndex=0; colIndex<9; colIndex++){
      let pos = getPos(rowIndex,colIndex);
      let num = +getPosId(pos).innerHTML;
      row.push(num);
    }
    filledSudoku.push(row);
  }
  return filledSudoku;
};

let timeInterval = '';
const setTime = function(time){
  timeInterval = setInterval(()=>{
    time+=1000;
    let cTime = new Date(time);
    getMinute().innerHTML = cTime.getMinutes();
    getSecond().innerHTML = cTime.getSeconds();
  },1000);
};

const loadSudoku = function(){
  let emptyPos = getLevel();
  if(!emptyPos) emptyPos = 40;
  let displayBoard = new DisplayBoard()
  let board = displayBoard.getDisplayBoard(emptyPos);
  board.forEach((row,rowIndex)=>{
    row.forEach((ele,colIndex)=>{
      if(ele>0){
        let pos = getPos(rowIndex,colIndex);
        getPosId(pos).innerHTML = ele;
        filledPos.push(pos);
        getPosId(pos).style.background = "#f1f3c7"
      }
    });
  });
};


const hasWon = function(filledSudoku){
  return isUniq(filledSudoku);
};

const setGameStatus = function(filledSudoku){
  if(hasWon(filledSudoku))
  getResult().innerHTML = winningStatus();
  else
  getResult().innerHTML = lossingStatus();
};

const gameResult = function(){
  let filledSudoku = getFilledBoard();
  setGameStatus(filledSudoku);
  clearInterval(timeInterval);
  getSolveId().style.visibility = setHidden();
  getBoard().disabled = true;
};

const reset = function(){
  board.forEach((row,rowIndex)=>{
    row.forEach((ele,colIndex)=>{
      let pos = getPos(rowIndex,colIndex);
      getPosId(pos).innerHTML = '';
      getPosId(pos).style.background = "white"
    });
  });
  getResult().innerHTML = ''
  clearInterval(timeInterval);
  getMinute().innerHTML = 0;
  getSecond().innerHTML = 0;
  getBoard().onclick = false;
  filledPos = [];
  loadSudoku();
};

const getLevel = function(){
  let level = event.target.id;
  return setLevel(level);
};

const setChallenge = function(){
  let id = event.target.id;
  if(isInvalid(id)) return;
  document.getElementById(id).onclick = getLevel;
  reset();
}

const start = function(){
  let time = 1483295400000;
  setTime(time);
  getSolveId().disabled=false;
  getBoard().onclick = fillSudoku;
  getResult().innerHTML = '';
};

const acceptChallenge = function(){
  getLevelId().style.visibility = setHidden();
  getSudokuField().style.visibility = setVisible();
  getSolveId().style.visibility = setVisible();
  getResetId().onclick = loadGame;
  getSolveId().onclick = gameResult;
  start();
}

const loadGame = function(){
  reset();
  getSolveId().style.visibility = setHidden();
  getLevelId().style.visibility = setVisible();
  getLevelId().onclick = setChallenge;
  getSudokuField().style.visibility = setHidden();
  getAcceptId().onclick = acceptChallenge;
}

window.onload = loadGame;
