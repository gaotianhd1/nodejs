var fs = require('fs');
var util = require('util');

fs.exists('./hello.md',function(exists){
    console.log(exists);
   util.debug(exists?"success":"fail");
});
