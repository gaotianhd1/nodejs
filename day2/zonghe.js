var fs = require('fs');
var path = './tem';
var mode = 493;
fs.exists(path,function(exists){
    if(exists){
        fs.exists('./tem/hello.md',function(exists){
            if(exists){

                console.log(fs.readFileSync('./tem/hello.md','utf-8'));
                fs.unlink('./tem/hello.md',function(err){
                    if(err){
                        console.log(err)
                    }else{
                        console.log("rm file ok")
                    }
                });

                fs.rmdir(path,function(err){
                 if(err){
                     console.log(err);
                 }else{
                    console.log("rm dir success");
                    }
                });
            }else{
                console.log("no file")
            }
        });

    }else{
        fs.mkdir(path,mode,function(err){
            if(err){
                console.log(err);
            }else{
                console.log("make dir success");
            }
        });
        fs.writeFile('./tem/hello.md','nihao','utf-8',function(err){
            if(err){
                console.log(err)
            }else{
                console.log("make file ok");
            }
        });
    }
});
