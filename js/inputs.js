const takePosition = function(){
  let id = event.target.id;
  return document.getElementById(id);
}

const setNumber = function(pos){
  let id = event.target.id;
  if (id=='n0') {
    pos.innerHTML = '';
    return ;
  }
  let num = document.getElementById(id);
  pos.innerHTML = num.innerHTML;
}

const getNumberByKeyBoard = function(pos){
  let num = event.keyCode-48;
  if(num>0 && num<=9){
    pos.innerHTML = num;
  }
}

let prevPos = 0;
const fillSudoku = function(filledPos){
  if(prevPos) prevPos.style.background = 'white';
  let pos = takePosition();
  if(filledPos.includes(pos.id)){
    return;
  }
  prevPos = pos;
  pos.style.background = '#c1f237';
  getNumber().onclick = (()=>{setNumber(pos)});
  document.onkeydown=(()=>{getNumberByKeyBoard(pos)});
};
