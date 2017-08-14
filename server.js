// server.js

var port = process.env.PORT || 8080;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io').listen(http);
var dgram = require("dgram");
var server = dgram.createSocket("udp4");
var mysocket = 0;

http.listen(port);

io.sockets.on('connection', function (socket) {
  mysocket = socket;
});
 
app.use(express.static(__dirname + '/views'));// set the static files location 

app.get('/', function (req, res) {
    res.sendFile('./views/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

server.on("message", function (msg, rinfo) {
  if (mysocket != 0) {
     mysocket.emit('field', "" + msg);
     mysocket.broadcast.emit('field', "" + msg);
  }
});

server.on("listening", function () {
  var address = server.address();
});

server.bind(41181);


