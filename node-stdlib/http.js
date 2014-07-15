var http = require('http'),
    port = process.env.PORT || 3000,
    message = 'success';


var server = http.createServer(function(req, res){
  console.log('request http version: ', req.httpVersion);

  res.writeHead(200, {
    'Content-Length': message.length,
    'Content-Type': 'text/plain'
  });
  res.end(message);
});

server.listen(port);