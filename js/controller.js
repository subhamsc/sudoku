let filledPos = [];
let getFilledBoard = function(){
  let filledSudoku = [];
  for(let rowIndex=0; rowIndex<9; rowIndex++){
    let row = [];
    for(let colIndex=0; colIndex<9; colIndex++){
      let pos = ''+rowIndex+colIndex;
      let num = +document.getElementById(pos).innerHTML;
      row.push(num);
    }
    filledSudoku.push(row);
  }
  return filledSudoku;
};

let timeInterval = '';
let setTime = function(time){
  timeInterval = setInterval(()=>{
    time+=1000;
    let cTime = new Date(time);
    document.getElementById('minute').innerHTML = cTime.getMinutes();
    document.getElementById('second').innerHTML = cTime.getSeconds();
  },1000);
};

let loadSudoku = function(){
  let emptyPos = getLevel();
  if(!emptyPos) emptyPos = 40;
  let displayBoard = getDisplayBoard(emptyPos);
  displayBoard.forEach((row,rowIndex)=>{
    row.forEach((ele,colIndex)=>{
      if(ele>0){
        let pos = ''+rowIndex+colIndex;
        document.getElementById(pos).innerHTML = ele;
        filledPos.push(pos);
        document.getElementById(pos).style.background = "#f1f3c7"
      }
    });
  });
};


let hasWon = function(filledSudoku){
  return isUniq(filledSudoku);
};

let gameResult = function(){
  let filledSudoku = getFilledBoard();
  if(hasWon(filledSudoku))
  document.getElementById('result').innerHTML = 'Congratulation right solution';
  else
  document.getElementById('result').innerHTML = 'Ohhhhh wrong solution';
  clearInterval(timeInterval);
  document.getElementById('solve').style.visibility = 'hidden';
  document.getElementsByClassName('board')[0].disabled = true;
};

let reset = function(){
  board.forEach((row,rowIndex)=>{
    row.forEach((ele,colIndex)=>{
      let pos = ''+rowIndex+colIndex;
      document.getElementById(pos).innerHTML = '';
      document.getElementById(pos).style.background = "white"
    });
  });
  document.getElementById('result').innerHTML = ''
  clearInterval(timeInterval);
  document.getElementById('minute').innerHTML = 0;
  document.getElementById('second').innerHTML = 0;
  document.getElementsByClassName('board')[0].onclick = false;
  filledPos = [];
  loadSudoku();
};

const getLevel = function(){
  let level = event.target.id;
  return setLevel(level);
};

let setChallenge = function(){
  let id = event.target.id;
  if(!id || id == 'accept') return;
  document.getElementById(id).onclick = getLevel;
  reset();
}


let start = function(){
  let time = 1483295400000;
  setTime(time);
  document.getElementById('solve').disabled=false;
  document.getElementsByClassName('board')[0].onclick = fillSudoku;
  document.getElementById('result').innerHTML = '';
};

let acceptChallenge = function(){
  document.getElementsByClassName('levels')[0].style.visibility = 'hidden';
  document.getElementsByClassName('sudokuField')[0].style.visibility = 'visible';
  document.getElementById('solve').style.visibility = 'visible';
  document.getElementById('reset').onclick = loadGame;
  document.getElementById('solve').onclick = gameResult;
  start();
}

let loadGame = function(){
  reset();
  document.getElementById('solve').style.visibility = 'hidden';
  document.getElementsByClassName('levels')[0].style.visibility = 'visible';
  document.getElementsByClassName('levels')[0].onclick = setChallenge;
  document.getElementsByClassName('sudokuField')[0].style.visibility = 'hidden';
  document.getElementById('accept').onclick = acceptChallenge;
}

window.onload = loadGame;
