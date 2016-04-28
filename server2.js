var http = require('http'),
      fs = require('fs'),
    path = require('path');
    
    
http.createServer(function (req, res) {
  
    var url = req.url;
  
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

      function  getStaticFileContent (res, filepath, contentType) {

        fs.readFile(filepath, function (err,data) {
          if (err) {
            res.writeHead(500);
            res.end();
            return;
          }
          if(data) {
            res.writeHead(200);
            res.end(data);
            // console.log(filepath);
          }
        });
      };

}).listen(8000);

//  To-do: make this server static for CSS and JS.