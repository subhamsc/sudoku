const getRow = function(pos){
  return Number.parseInt(pos/10);
};

const getCol = function(pos){
  return pos%10;
};

const generateRandomNumberBetween=function(x,y) {
  return Math.floor(Math.random()*(y-x))+x;
};

const getPos = function(row,col){
  return ''+row+col;
};
