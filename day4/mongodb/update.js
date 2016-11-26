var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/stu';

var updateDB = function(db,callback){
  db.collection('restaurants').updateOne(
    {"name":"Vella"},
    {$set:{"cuisine":"China"},
     $set:{"restaurant_id":"555555"},
     $currentDate:{"lastModified":true}
   },
   function(err,results){
     console.log(results);
     callback();
   });
};

MongoClient.connect(url,function(err,db){
  assert.equal(null,err);
  console.log('connect ok');
  updateDB(db,function(){
    db.close();
  });
});
