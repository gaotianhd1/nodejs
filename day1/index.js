var http = require("http");
var serv = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('<h1>Hello Welcome to Node.js!</h1>');
});

serv.listen(8000);
