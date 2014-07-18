var http = require('http'),
    port = process.env.PORT || 3000,
    MongoClient = require('mongodb').MongoClient,
    message = 'success';

MongoClient.connect("mongodb://localhost:27017/exampleDB", function(err, db){
  if (!err) {
    console.log('connection successful');
    db.createCollection('test', function(err, collection){});
  }
  if (err) console.log(err.message);
});


var server = http.createServer(function(req, res){
  res.on('finish', function(){
    console.log('the response headers/body have been handed to the operating system');
  });
  res.writeHead(200, {
    'Content-Length': message.length,
    'Content-Type': 'text/plain'
  });

  console.log(new Date().getTime());
  res.end(message);
});

server.listen(port);