var express = require('express');
var bodyParser  = require("body-parser");
var app = express();
var io = require('socket.io').listen("8500");
//var rc522 = require("rc522-rfid");
	
app.use(bodyParser.urlencoded({ extended: true }));
      app.use(bodyParser.json());	
console.log("App successfully launched!");

// Create a sample login page @ http://localhost:8000
app.get('/', function(req, res){
	res.sendFile(__dirname + '/rfid2.html');
});

// Everytime you tag in this will be triggered.
app.post('/cardDetect',function(req, res){
	var user='';	
	if(req.body.uid=='16017213580'){
		user='Subhojit';	
	}	
	if(req.body.uid=='52205391'){
		user='Saurav';
	}
console.log(req.body.uid);
	res.send("Hello"+ req.body.uid); 
	io.sockets.emit("rfid", user);
	// Sends the RFID Serial Number through Socket.IO
});

app.use('/rfid.png', express.static(__dirname + '/rfid.png')); 

app.listen(8000); // Setup your server port.
