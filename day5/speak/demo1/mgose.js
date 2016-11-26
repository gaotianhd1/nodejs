var mongoose = require('mongoose');
var url = "mongodb://zg:hao138232@ds159517.mlab.com:59517/mydb";
mongoose.connect(url);

var db = mongoose.connection;
db.on('error',function(){
  console.log('connect error');
});

db.once('open',function(){
  console.log("mongoose working!");
});

var Schema = mongoose.Schema;
var userSchema = new Schema({
  name:String,
  age:Number,
  DOB:Date,
  isAlive:Boolean
});

var User = mongoose.model('User',userSchema);

/*var arvind = new User({
    name : "David",
    age:23,
    DOB:'01/01/1999',
    isAlive:true
});

arvind.save(function(err,data){
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }
});*/

User.remove({name:"David"},function(err){
  console.log("remove");
  if(err) console.log(err);
});

User.find({},function(err,data){
  console.log("find");
  console.log(data);
});
