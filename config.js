var fs = require('fs');
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = JSON.parse(fs.readFileSync('./environments/'+process.env.NODE_ENV+'.json'));

module.exports = config;
