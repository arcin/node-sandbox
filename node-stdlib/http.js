var http = require('http');


var serverObject = http.Server();
var createdServer = http.createServer(function(req, res){
  res.end('hello');
});

console.log('server: ', serverObject);
console.log('createdServer: ', createdServer);