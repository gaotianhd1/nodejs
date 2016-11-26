var http = require('http');
var query = require('querystring');
var serv = http.createServer(function(req,res){
    if('/' == req.url){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(['<h1>Welcome to node </h1>',
        '<form method="POST" action="/url"',
        '<fieldset>',
        '<label> Personal information </label>',
        '<p>Name</p>',
        '<input type="text" name="name">',
        '<p><button>Submit</button></p>',
        '</form>'
        ].join(' '));
    }else if('/url' == req.url && 'POST' == req.method){
        var name = '';
        req.on('data',function(chunk){
            name += chunk;
        });

        console.log(name);

        if(name == 'name='){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(['Your sent a <em>' + req.method + '</em> request',
            '<p>Data is'+ name +'null</p>'].join(' '));
        }else{
        req.on('end',function(){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(['Your sent a <em>' + req.method + '</em> request',
            '<p>Data:'+ query.parse(name).name + '</p>'].join(' '));
        });
        }
        
    }else{
        console.log("123");
        res.writeHead(404,{'Content-Type':'text/html'});
        res.end("error");
    }
}).listen(3000);
