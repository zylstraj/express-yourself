// set up ======================================================================
var express  = require('express');
var app      = express();                 // create our app w/ express
var mongoose = require('mongoose');           // mongoose for mongodb
var port     = process.env.PORT || 8080;        // set the port
var morgan   = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// configuration ===============================================================
mongoose.connect('mongodb://localhost/express-yourself');   // connect to mongoDB database on modulus.io

app.use(express.static(__dirname + '/public'));     // set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request

var Todo = mongoose.model('Todo', {
  text : {type : String, default: ''}
});

function getTodos(res){
  Todo.find(function(err, todos) {

      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err)
        res.send(err)

      res.json(todos); // return all todos in JSON format
    });
};

// api ---------------------------------------------------------------------
  // get all todos
  app.get('/todos', function(req, res) {

    // use mongoose to get all todos in the database
    getTodos(res);
  });

// create todo and send back all todos after creation
  app.post('/todos', function(req, res) {

    // create a todo, information comes from AJAX request from Angular
    Todo.create({
      text : req.body.text,
      done : false
    }, function(err, todo) {
      if (err)
        res.send(err);

      // get and return all the todos after you create another
      getTodos(res);
    });

  });

  // delete a todo
  app.delete('/todos/:todo_id', function(req, res) {
    Todo.remove({
      _id : req.params.todo_id
    }, function(err, todo) {
      if (err)
        res.send(err);

      getTodos(res);
    });
  });

  // application -------------------------------------------------------------
  app.get('*', function(req, res) {
    res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
  });

app.listen(port);
console.log("App listening on port " + port);


/*'use strict';
//application setup
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var morgan = require('morgan');
var methodOverride = require('method-override');
var port = 3000;

mongoose.connect('mongodb://localhost/express-yourself');

//static services
   app.use(express.static(__dirname + '/public'));          // set the static files location /public/img will be /img for users
    app.use(morgan('dev'));                                  // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());
    // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
    // parse application/vnd.api+json as json
    app.use(methodOverride());








*/
/*
//define model ======

 var Todo = mongoose.model('Todo', {
        todo : {type : String
    }
});

 function getTodos(res){
  Todo.find(function(err, todos) {

      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err)
        res.send(err)

      res.json(todos); // return all todos in JSON format
    });
};

app.get('/todos', function(req, res) {
  getTodos(res);
  });

app.post('/todos', function(req, res) {
   Todo.create({
            text : req.body.text,
            done : false
        }, function(err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            getTodos(res);
            });
    });

app.delete('/todos/:todo_id', function(req, res) {
        Todo.remove({
            _id : req.params.todo_id
        }, function(err, todo) {
            if (err)
                res.send(err);

            // get and return all the todos after you create another
            getTodos(res);
            });
        });
// application -------------------------------------------------------------
  app.get('/todos', function(req, res) {
    res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
  });

app.listen(port);
console.log("App listening on port " + port);
*/
/*
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

app.get('/users', function(req, res){
  res.render('users');
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
app.put('/users', function (req, res) {
  res.send('Got a PUT request at /users');
});

// accept DELETE request at /user
app.delete('/users', function (req, res) {
  res.send('Got a DELETE request at /users');
});

//static services
app.use(express.static(path.join(__dirname, 'public')));

//app listener
app.listen(port, function() {
  console.log('Server Running on ' + port);
});
*/
