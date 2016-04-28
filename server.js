var http = require('http'),
    fs = require('fs');
    
    
http.createServer(function (request, response) {
  
  var link = __dirname;
  
  fs.readFile(link + request.url, function (err,data) {
     console.log(request.url);  
    if (err) {
    response.writeHead(404);
    response.end();
    return;
    }
  response.writeHead(200);
  response.end(data);
});
    
}).listen(8000);


//  To-do: make this server static and be able 
//  to assign specific URLs on specific pages/links.
