var express = require('express');
var path = require('path');
var db = require('./db');
var bodyParser = require('body-parser');
var app = express();

console.log(process.env.NODE_ENV);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/',express.static(path.join(__dirname,'ui')));

app.get('/api/tasks',function(req,res){
  // all
  db.collection('tasks').find({},function(err,data){
    res.json(data);
  });
});

app.post('/api/tasks',function(req,res){
  // create
  db.collection('tasks').insert(req.body,function(err,data){
    res.json(data);
  });
});

var server = app.listen(8000,function(){
  console.log(server.address().port);
});
