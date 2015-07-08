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

//REST handlers:
// respond with "Hello World!" on the homepage
app.get('/', function (req, res) {
  res.send('CUBS WIN!!!');
});

// accept POST request on the homepage
app.post('/', function (req, res) {
  res.send('Got a POST request');
});

// accept PUT request at /user
// app.put('/user', function (req, res) {
//   res.send('Got a PUT request at /user');
// });

// accept DELETE request at /user
// app.delete('/user', function (req, res) {
//   res.send('Got a DELETE request at /user');
// });,

//static services
app.use(express.static(path.join(__dirname, 'public')));

//app listener
app.listen(port, function(){
  console.log('Server Running on ' + port);
});
