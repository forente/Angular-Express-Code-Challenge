
var express = require('express');

// TODO:
var students = require('./router/students');

var app = express();

app.use(express.static('public'));

//app.use('/',students);


var server = app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port;
  console.log('listening on port',port);
});
