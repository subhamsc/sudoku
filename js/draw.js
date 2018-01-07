const drawBoard = function (board, filledPos) {
  board.forEach((row, rowIndex) => {
    row.forEach((ele, colIndex) => {
      if (ele > 0) {
        let pos = getPos(rowIndex, colIndex);
        getPosId(pos).innerHTML = ele;
        filledPos.push(pos);
        getPosId(pos).style.background = "#f1f3c7"
      }
    });
  });
};

const getFilledBoard = function () {
  let filledSudoku = [];
  for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
    let row = [];
    for (let colIndex = 0; colIndex < 9; colIndex++) {
      let pos = getPos(rowIndex, colIndex);
      let num = +getPosId(pos).innerHTML;
      row.push(num);
    }
    filledSudoku.push(row);
  }
  return filledSudoku;
};

const showTime = function(time){
  getMinute().innerHTML = time.getMinutes();
  getSecond().innerHTML = time.getSeconds();
};

const showResult = function(status){  
  getResult().innerHTML = status;
};
