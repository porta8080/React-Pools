var config = require('./config');
var mongojs = require('mongojs');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var db = mongojs('mongodb://localhost:27017/'+config.db.name);

module.exports = db;
