var data = "writeFile";
var file = "./hello.md";
var fs = require('fs');
try{
    fs.writeFileSync(file,data,'utf-8');
    console.log("success");
}catch(e){
    console.log("err");
}

