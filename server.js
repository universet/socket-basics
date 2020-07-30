var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app); //tells the node to start a new sever and to use this express app as bioler plate
var io = require('socket.io')(http);
var moment = require('moment');

app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket) {
	console.log('User connected via socket.io!');
	
	socket.on('message', function (message) {
		console.log('Message recieved: ' + message.text);
		
		message.timestamp = moment().valueOf();
		io.emit('message', message);
		//socket.broadcast.emit('message', message); //sends to everybody but user, io.emit send to everybody
	});

	socket.emit('message', {
		text: 'Welcome to the chat application!',
		timestamp: moment().valueOf()
	});
});

http.listen(PORT, function () {
	console.log('Server started!');
});