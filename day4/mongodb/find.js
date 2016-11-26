var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/stu';

var findDB = function(db,callback){
    var cursor = db.collection("restaurants").find();
    cursor.each(function(err,doc){
        assert.equal(err,null);
        if(doc !== null){
            console.log(doc);
        }else{
            callback();
        }
    });
};

MongoClient.connect(url,function(err,db){
    assert.equal(null,err);
    console.log('connect ok');

    findDB(db,function(){
        db.close();
    });
});



