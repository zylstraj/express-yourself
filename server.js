'use strict';
//application setup
var express = require('express');
var path = require('path');
var app = express();
var port = 3000;

//view directory setup
app.set('views', path.join(__dirname, 'views'));
//view engine setup
app.set('view engine', 'jade');

//index get request
app.get('/', function(req, res){
  res.render('index');
});

app.get('/about', function(req, res){
  res.render('about');
});

//static services
app.use(express.static(path.join(__dirname, 'public')));

//app listener
app.listen(port, function(){
  console.log('Server Running on ' + port);
});
