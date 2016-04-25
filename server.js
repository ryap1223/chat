var mysql= require('mysql');

var connection = mysql.createConnection({

	host : 'localhost',
	user: 'root',
	password: '',
	database: 'chat'
});
connection.connect();





// CREATE DATABASE FIRST


// mongo.connect('mongodb://127.0.0.1/webchat', function (err, db){
// 	if(err) throw err;

// 	client.on('connection', function(socket){

// 		socket.on('input', function(data) {
// 		//console.log(data);
// 		});

// 	});
// });
