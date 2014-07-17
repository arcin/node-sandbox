var http = require('http'),
    net = require('net');


var options = {
  hostname: 'localhost',
  port: 3000,
  method: 'GET'
};

var req = http.request(options, function(res){
  res.setEncoding('utf-8');
  res.on('data', function(data){
    console.log('Response Body: ', data);
  });
});

req.on('response',function(res){
  console.log(res.headers);
});

req.end();