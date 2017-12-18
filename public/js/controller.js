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

let loadSudoku = function(emptyPos){
  if(!emptyPos) emptyPos = 40;
  let displayBoard = display(emptyPos);
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
  document.getElementById('result').innerHTML = 'Congratulation you won';
  else
  document.getElementById('result').innerHTML = 'Ohhhhh wrong solution';
  clearInterval(timeInterval);
  document.getElementById('solve').disabled=true;
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
  document.getElementById('start').disabled=false;
  document.getElementsByClassName('levels')[0].disabled=false;
  document.getElementById('minute').innerHTML = 0;
  document.getElementById('second').innerHTML = 0;
  document.getElementsByClassName('board')[0].onclick = false;
  filledPos = [];
  startGame();
};

const getLevel = function(){
  let level = event.target.id;
  return setLevel(level);
};

let setChallenge = function(){
  reset();
  document.getElementById('beginner').onclick = getLevel;
  document.getElementById('easy').onclick = getLevel;
  document.getElementById('medium').onclick = getLevel;
  document.getElementById('hard').onclick = getLevel;
  document.getElementById('expert').onclick = getLevel;
  startGame();
}


let start = function(){
  let time = 1483295400000;
  setTime(time);
  document.getElementsByClassName('board')[0].onclick = fillSudoku;
  document.getElementById('result').innerHTML = '';
  document.getElementById('start').disabled=true;
  document.getElementById('solve').disabled=false;
  document.getElementsByClassName('levels')[0].onclick=false;
};

let startGame = function(){
  let emptyPos = getLevel();
  document.getElementById('start').onclick = start;
  document.getElementById('reset').onclick = reset;
  document.getElementById('solve').onclick = gameResult;
  document.getElementById('solve').disabled = true;
  document.getElementsByClassName('levels')[0].onclick = setChallenge;
  loadSudoku(emptyPos);
}

window.onload = startGame;
