var fs = require('fs'),
    http = require('http'),
    url = require('url');
    


http.createServer(function (req, res) {
  fs.readFile(__dirname + req.url, function (err,data) {
    
    console.log('Loaded: ' + req.url);  
    if (err) {
      res.writeHead(404);
      res.end();
      return;
    }
    res.writeHead(200);
    res.end(data);
    req.url = url.parse(req.url);  

    });

}).listen(8000);


//  To-do: make this server static and be able 
//  to assign specific URLs on specific pages/links.















// http.get('./index.html', function(req, res) {
//     console.log(`Got response: ${res.statusCode}`);
//       // consume response body
//       // fs.readFile(__dirname + req.url, function (err,data) {
//       //   if (err) {
//       //     res.writeHead(404);
//       //     res.end(JSON.stringify(err));
//       //     return;
//       //   }
//       //   res.writeHead(200);
//       //   res.end(data);
//       });


//       res.resume();
//     }).on('error', (e) => {
//       console.log(`Got error: ${e.message}`);
// });
//   });


