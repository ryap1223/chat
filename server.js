var http = require('http'),
    fs = require('fs');
    
    
http.createServer(function (req, res) {
  
  fs.readFile('./' + req.url, function (err,data) {
    
   // console.log(req.url);  
    if (err) {
      res.writeHead(404);
      res.end();
      return;
    }

  res.writeHead(200);
  res.end(data);
});
    
}).listen(8000);


//  To-do: set specific URLs on specific pages/links.
