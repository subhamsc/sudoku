let getId = (id)=> document.getElementById(id);

let getClass = (className)=> document.getElementsByClassName(className)[0];

let getPosId = (pos)=> getId(pos);

let getMinute = ()=> getId('minute');

let getSecond = ()=> getId('second');

let getResult = ()=> getId('result');

let getSolveId = ()=> getId('solve');

let getBoard = ()=> getClass('board');

let getLevelId = ()=> getClass('levels');

let getSudokuField = ()=> getClass('sudokuField');

let getResetId = ()=> getId('reset');

let getAcceptId = ()=> getId('accept');

let getNumber = ()=> getClass('numbers');

let setHidden = ()=> 'hidden';

let setVisible = ()=> 'visible';

let isInvalid = (id)=> id==null || id == 'accept';

let winningStatus = ()=> 'Congratulation right solution';

let lossingStatus = ()=> 'Ohhhhh wrong solution';