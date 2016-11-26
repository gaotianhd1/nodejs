var http = require('http');
var serv = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('<h1>Welcome to NOde</h1>');
}).listen(3000);
