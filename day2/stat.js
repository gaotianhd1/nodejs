var fs = require('fs');
fs.stat('./tem',function(err,stats){
    console.log(stats);
});
