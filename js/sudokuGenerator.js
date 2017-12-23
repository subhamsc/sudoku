const board =  [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const generate = function(board){
  let solution = solveSudoku(board);
  let shuffledBoard = shuffle(solution);
  if(isUniq(shuffledBoard))
  return shuffledBoard;
}

const setPosEmpty = function(board,max,pos){
  let row = Math.floor(Math.random()*9);
  let col = Math.floor(Math.random()*9);
  board[row][col]=0;
  max--;
  try {
    if(max<=0) return;
    solveSudoku(board);
    if(isUniq(board)){
      pos.push(''+row+col);
      setPosEmpty(board,max,pos);
    }
  } catch(e){
    return;
  }
  return pos;
};

const getDisplayBoard = function(numOfPos){
  let shuffledBoard = generate(board);
  let emptyPos = setPosEmpty(shuffledBoard,numOfPos,[]);
  emptyPos.forEach((pos)=>{
    board[getRow(pos)][getCol(pos)]=0;
  });
  return board;
};
