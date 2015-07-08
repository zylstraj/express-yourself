'use strict';
//application setup
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;


app.use(bodyParser.json());
//view directory setup
app.set('views', path.join(__dirname, 'views'));
//view engine setup
app.set('view engine', 'jade');

//index get requests
app.get('/', function(req, res){
  res.render('index');
});
app.put('/', function(req, res) {
  res.send("Hey Hey Hey, Cubs Win!");
});
app.post('/', function (req, res) {
  res.send('POST request to the homepage');
});
app.get('/about', function(req, res){
  res.render('about');
});
app.post('/users', function(req, res) {
  var users = ['Bob', 'Larry', 'Joe'];
  res.json(users);
  console.log()
});
app.get('/footer', function(req, res){
  res.render('footer');
});
app.get('/html', function(req, res) {
  var blocks = '<ul><li>Fixed</li><li>Movable</li></ul>';
  res.send(blocks);
});
app.get('/head', function(req, res){
  res.render('head');
});
app.get('/nav', function(req, res){
  res.render('nav');
});
app.put('/nav', function(req, res){
  res.send('<li>')
})
app.post('/users', function(req, res) {
  res.send('You hit post');
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
// app.delete('/users', function (req, res) {
//  res.send('Got a DELETE request at /user');
// });,

//static services
app.use(express.static(path.join(__dirname, 'public')));

//app listener
app.listen(port, function(){
  console.log('Server Running on ' + port);
});
