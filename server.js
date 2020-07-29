var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app); //tells the node to start a new sever and to use this express app as bioler plate

app.use(express.static(__dirname + '/public'));

http.listen(PORT, function () {
	console.log('Server started!');
});