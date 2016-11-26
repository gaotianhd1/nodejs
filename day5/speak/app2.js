var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index2.html');
});

io.on('connection',function(socket){
    socket.broadcast.emit('broadcast');
    socket.on('chat message',function(msg){
      console.log("aaa");
        io.emit('chat message',msg);
    });
    socket.on('ferret',function(name,fn){
      console.log("ok");
      console.log(name);
      fn(name);
    });
});

http.listen(3000,function(){
    console.log('listening on : 3000');
});
