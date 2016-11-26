var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017/stu';

var mydbInit = function(db,callback){
    db.collection('restaurants').insertOne({
        "address":{
            "stree":"2",
            "zipcode":"10075",
            "building":"1480",
            "coord":[-73.9557413,40.7720266]
        },
        "borough":"Manhattan",
        "cuisine":"Italian",
        "grades":[
            {
                "data":new Date("2014-10-01T00:00:00Z"),
                "grade":"A",
                "score":11
            },
            {
                "data":new Date("2014-10-16T00:00:00Z"),
                "grade":"B",
                "score":17
            }
        ],
        "name":"Vella",
        "restaurant_id":"41704620"
    },function(err,result){
        assert.equal(err,null);
        console.log("inserted a document into the restaurants colection");
        callback();
    });
};

MongoClient.connect(url,function(err,db){
    assert.equal(null,err);
    console.log('connect ok');
    mydbInit(db,function(){
        console.log("insert one ok");
        db.close();
    });
});
