const SudokuChecker = function(board){
  this.board = board;
  this.numbers = [1,2,3,4,5,6,7,8,9,];
};


SudokuChecker.prototype.hasAllNumbersIn = function(list){
  return this.numbers.every((number)=>{
    return list.includes(number);
  });
};

SudokuChecker.prototype.checkInRows = function(){
  return this.board.every((row)=>{
    return this.hasAllNumbersIn(row);
  });
};


SudokuChecker.prototype.checkInCol = function(index,col){
  this.board.forEach((row)=>col.push(row[index]));
  return this.hasAllNumbersIn(col);
};


SudokuChecker.prototype.checkInCols = function(){
  return this.board.every((row,index)=>{
    return this.checkInCol(index,[]);
  });
};

SudokuChecker.prototype.checkInSquare = function(square,row,col){
  for (let rowIndex=row; rowIndex<row+3; rowIndex++) {
    for (let colIndex=col; colIndex<col+3; colIndex++) {
      square.push(this.board[rowIndex][colIndex]);
    }
  }
  return this.hasAllNumbersIn(square);
};

SudokuChecker.prototype.checkInSquares = function(){
  let squares = [];
  for (let row=0; row<9; row+=3) {
    for (let col=0; col<9; col+=3) {
      squares.push(this.checkInSquare([],row,col));
    }
  }
  return squares.every((square)=>square);
};


SudokuChecker.prototype.isUniq = function(){
  return this.checkInRows() && this.checkInCols() && this.checkInSquares();
};
