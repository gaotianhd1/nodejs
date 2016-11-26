var express = require("express"),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);
app.use('/',express.static(__dirname));
server.listen(3000);

var useList = [];
var nameList = [];
io.on('connection',function(socket){
  console.log(socket.handshake.address);
  socket.on('login', function (msg) {
      useList.push(socket);
      socket.name = msg.name;
      nameList.push(msg.name);
      socket.broadcast.emit('message', msg.data);
  });
  socket.on('message', function (msg,fn) {
      socket.broadcast.emit('message', msg);
      fn(true);
  });
  socket.on('chakan', function (msg) {
      socket.emit('nameList', nameList.join(","));
  });
  socket.on('to', function (msg) {
      useList.forEach(function(e){
        if (msg.name == e.name){
          e.emit('to',socket.name + "-to-you:" + msg.data);
        }
      })
  });
});
