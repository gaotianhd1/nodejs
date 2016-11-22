var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '学生管理系统' });
});

router.post('/login', function(req, res, next) {
  var db = req.db;
  var users = db.get("user");
  var name = req.body.username;
  var password = req.body.password;
  var identity = req.body.identity;
  users.findOne({"user":name,"password":password,"biao":identity},function(err,doc){
      if(doc){
        if(doc.biao == "1"){
          res.render('tea',{user:name});
        }else{
          res.render('stu',{user:name});
        }
      }else{
        var error = "登陆失败";
        res.render('loginerr',{error:error});
      }
  });

});

router.post('/insertStu', function(req, res, next) {
    var db = req.db;
    var users = db.get("user");
    var name = req.body.username;
    var age = req.body.age;
    var email = req.body.email;
    var phone = req.body.phone;
    var password = req.body.password;
    var biao = req.body.biao;
    console.log(name);
    if(name == ''){
      res.render('inforErr',{user:"admin"});
    }else{
      users.insert({
        "user":name,
        "password":password,
        "age":age,
        "email":email,
        "phone":phone,
        "biao":biao
      },function(err){
        if(err){
          res.send("error:add data is error");
        }else{
          res.render('tea',{user:"admin"});
        }
      });
    }


});

router.post('/updateStu',function(req,res,next){
  var db = req.db;
  var users = db.get("user");
  var name = req.body.username;
  var age = req.body.age;
  var email = req.body.email;
  var phone = req.body.phone;
  var password = req.body.password;
  var biao = "0";
  console.log(password);
  users.update({"user":name},{
    "user":name,
    "age":age,
    "email":email,
    "phone":phone,
    "password":password,
    "biao":biao
  },function(err){
    if(err){
      res.send("error:update error");
    }else{
      res.render('stu',{user:name});
    }
  });
});

router.post('/delete',function(req,res,next){
  var db = req.db;
  var users = db.get("user");
  var name = req.body.username;
  var del = req.body.delete;
  var over = req.body.over;
  console.log(del);
  console.log(over);
  if(del){
    users.remove({"user":name},function(err){
      if(err){
        res.send("error:delete error");
      }else{
        res.render('tea',{user:"admin"});
      }
    });
  }
  if(over){
    res.render('tea',{user:"admin"});
  }

});
router.post('/infor',function(req,res,next){
  var db = req.db;
  var users = db.get("user");
  var username = req.body.username;
  users.findOne({"user":username},function(err,doc){
    if(err){
      res.send("error:unkonwn error")
    }else{
      console.log(doc);
      res.render('stuInfor',{info:doc});
    }
  });

});

router.get('/select',function(req,res,next){
  var db = req.db;
  var users = db.get('user');
  users.find({"biao":"0"}, function(err, docs){
    // console.log(docs);
    res.render('userInfo', {studb:docs});
  });
});

router.get('/insert',function(req,res,next){
  res.render('insert');
});

router.post('/nameErr',function(req,res,next){
  res.render('tea',{user:"admin"});
});

module.exports = router;
