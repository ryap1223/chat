var http = require('http'),
      fs = require('fs');
    
    
http.createServer(function (req, res) {
  
    var url = req.url;
  
    switch(url) {
      case '/' :
        getStaticFiles(res,'www/index.html');
        break;
      case '/chat' :
        getStaticFiles(res, 'www/chat.html');
        break;
      case '/about' :
        getStaticFiles(res, 'www/about.html');
        break;
      default :
        res.writeHead(404);
        res.end();
    }


        // console.log(url);


}).listen(8000);


function  getStaticFiles (res, filepath) {

    fs.readFile(filepath , function (err,data) {
      if (err) {
        res.writeHead(500);
        res.end();
        return;
      }
      if(data) {
        res.writeHead(200);
        res.end(data);
      }
    });
  };





//  To-do: make this server static for CSS and JS.