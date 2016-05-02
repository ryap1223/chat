// NOT WORKING


var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {
    // console.log('request starting...');
  
  var url = request.url;
  
    switch(url) {
      case '/' :
        getStaticFileContent(res, 'index.html');
        break;
      case '/chat' :
        getStaticFileContent(res, 'chat.html');
        break;
      case '/about' :
        getStaticFileContent(res, 'about.html');
        break;
      default :
        res.writeHead(404);
        res.end();
      }

  var filePath = '.' + url;
  if (filePath == './')
    filePath = './index.htm';
    
  var extname = path.extname(filePath);
  var contentType = 'text/html';
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
  }
  
  
    fs.exists(filePath, function(exists) {
  
    if (exists) {
      fs.readFile(filePath, function(error, content) {
        if (error) {
          response.writeHead(500);
          response.end();
        }
        else {
          response.writeHead(200, { 'Content-Type': contentType });
          response.end(content, 'utf-8');
        }
      });
    }
    else {
      response.writeHead(404);
      response.end();
    }
  });}).listen(8000);


//  To-do: set specific URLs on specific pages/links



