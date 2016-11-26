var express = require('express');
var app = express();
var routes = require('./routes/route.js')(app);
app.listen(3000);

