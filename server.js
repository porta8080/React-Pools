var express = require('express');
var path = require('path');
var config = require('./config');
var db = require('./db');
var Validator = require('./utils/Validator');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/',express.static(path.join(__dirname,'ui')));

app.get('/seed',function(req,res){
  db.collection('pools').remove({},function(){
    db.collection('pools').insert(
      [
        {
          title: 'Pool #1',description:'Lorem ipsum sit amment dolor conseptur adisplicin',
          intentions:[
            {
              title:'Opção #1',votes:
              [
                {uid:'123456789'},
                {uid:'223456789'}
              ]
            },
            {
              title:'Opção #2',votes:
              [
                {uid:'123456700'}
              ]
            }
          ]
        },
        {
          title: 'Pool #2',description:'Lorem ipsum sit amment dolor conseptur adisplicin',
          intentions:[
            {
              title:'Opção #1',votes:
              [
                {uid:'123444789'},
                {uid:'223422789'}
              ]
            },
            {
              title:'Opção #2',votes:
              [
                {uid:'333456789'}
              ]
            }
          ]
        }
      ],function(err,data){
        res.json(data);
      });

  });
});

app.get('/api/pools',function(req,res){
  db.collection('pools').find({},function(err,data){
    res.json(data);
  });
});

app.post('/api/pools',function(req,res){
  db.collection('pools').insert(req.body,function(err,data){
    res.json(data);
  });
});

var server = app.listen(config.server.port,function(){
  console.log(server.address().port);
});
