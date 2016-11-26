var data = "hello";

var fs = require('fs');

var file = "./hello.md";

fs.writeFile(file,data,'utf-8',function(err){
    if(err){
    console.log(err);
    }else{
        console.log('success');
    }
});
