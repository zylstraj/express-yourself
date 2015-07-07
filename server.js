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

//index get requests
app.get('/', function(req, res){
  res.render('index');
});
app.get('/about', function(req, res){
  res.render('about');
});
app.get('/footer', function(req, res){
  res.render('footer');
});
app.get('/head', function(req, res){
  res.render('head');
});
app.get('/nav', function(req, res){
  res.render('nav');
});

//static services
app.use(express.static(path.join(__dirname, 'public')));

//app listener
app.listen(port, function(){
  console.log('Server Running on ' + port);
});
