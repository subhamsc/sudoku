const http = require('http');
const fs = require('fs');
const PORT = 8080;

let getTypes = function(extn){
  let types = {
    html:'text/html',
    css:'text/css',
    js:'text/javascript'
  }
  return types[extn];
};

let requestHandler = function(req,res){
  let filePath = req.url;
  console.log(filePath);

  if(filePath=='/')
  filePath = '/sudoku.html';

  if(filePath=='/favicon.ico'){
    res.end();
    return;
  }

  fs.readFile('./public'+filePath,(err,text)=>{
    if(err){
      res.statusCode = 404;
      res.end();
      return;
    }
    let extn = filePath.split('.').pop();
    let type = getTypes(extn);
    res.setHeader('Content-Type',type);
    res.write(text);
    res.end();
  });
};

let server = http.createServer(requestHandler);
server.listen(PORT);
console.log(`listening at:${PORT}`);
