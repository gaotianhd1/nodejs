var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/stu';
mongoose.connect(url);

var db = mongoose.connection;
db.on('error',function(){
    console.log('connect error');
});

db.once('open',function(){
    console.log('mongoose working');
});

var Schema = mongoose.Schema;
var userSchema = new Schema({
    name:String,
    age:Number,
    DOB:Date,
    isAlive:Boolean
});
//di2zhongfangfa
//var bookSchema = mongoose.Schema({
//    name:String
//});
//var Book = mongoose.model('Book',bookSchema);

var User = mongoose.model('User',userSchema);

var arvind = new User({
    name:'David',
    age:23,
    DOB:'01/01/1999',
    isAlive:true
});

arvind.save(function(err,data){
    console.log('insert ok');

User.findOne({},function(err,data){
    console.log(data);
});
});

User.remove({name:'David'},function(err){
    console.log('remove');
    User.find({},function(err,data){
        console.log('find');
        console.log(data);
    });
    if(err) console.log(err);
});



