var fs = require('fs');

try{
 var data = fs.readFileSync('hello.md','utf-8');
 console.log(data);
}
catch(e){
 console.log(e);
}
