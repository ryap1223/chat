var http = require('http'),
    fs = require('fs');


fs.readFile('./index.html',  function (err, html) {
    if (err) throw err; 
         
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8000);
});


function style(response) {

  console.log("Request handler 'style' was called.");

  fs.readFile("css/index.css", function(error, file) {
	if(err) throw err;
	response.writeHead(200, {"Content-Type": "text/css"});
	response.write(file);
	response.end();
  });

}