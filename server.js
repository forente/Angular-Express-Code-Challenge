
var express = require('express');

// TODO:
var index = require('./router/index.js');
var students = require('./router/students.js');

var app = express();

app.use(express.static('public'));


app.use('/',index);
app.use('/students',students);



var server = app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port;
  console.log('listening on port',port);
});
