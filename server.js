var express = require('express');
var path = require('path');
var db = require('./db');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/',express.static(path.join(__dirname,'ui')));

app.get('/api/pools',function(req,res){
  // all
  var votes_i1 = [
    {_id: 1,uid:'123456789'},
    {_id: 2,uid:'223456789'}
  ];

  var votes_i2 = [
    {_id: 3,uid:'123456700'}
  ];

  var votes_i3 = [
    {_id: 4,uid:'123444789'},
    {_id: 5,uid:'223422789'}
  ];

  var votes_i4 = [
    {_id: 6,uid:'333456789'}
  ];

  db.collection('pools').find({},function(err,data){
    res.json([
      {
        _id:1,title: 'Pool #1',description:'Lorem ipsum sit amment dolor conseptur adisplicin',
        intentions:[
          {_id: 1,title:'Opção #1',votes: votes_i1},
          {_id: 2,title:'Opção #2',votes: votes_i2}
        ],
        votes: votes_i1.concat(votes_i2)
      },{
        _id:2,title: 'Pool #2',description:'Lorem ipsum sit amment dolor conseptur adisplicin',
        intentions:[
          {_id: 3,title:'Opção #1',votes: votes_i3},
          {_id: 4,title:'Opção #2',votes: votes_i4}
        ],
        votes: votes_i3.concat(votes_i4)
      }
    ]);
  });
});

app.post('/api/pools',function(req,res){
  // create
  db.collection('pools').insert(req.body,function(err,data){
    res.json(data);
  });
});

var server = app.listen(8080,function(){
  console.log(server.address().port);
});
