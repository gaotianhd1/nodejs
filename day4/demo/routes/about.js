var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/about',function(req,res,next){
  var info = [
    {name:'zhangsan',age:20},
    {name:'zhangsan1',age:21},
    {name:'zhangsan2',age:22}
];
  res.render('about',{
    info:info,
    title:'hello'
  });
});
module.exports = router;
