var http = require('http'),
    port = process.env.PORT || 3000,
    MongoClient = require('mongodb').MongoClient,
    message = 'success';

MongoClient.connect("mongodb://localhost:27017/exampleDB", function(err, db){
  if (err) console.log(err.message);

  console.log('connection successful');

  var collection = db.collection('test');
  var doc1 = { hello: 'doc1' };
  var doc2 = { hello: 'doc2' };
  var lotsOfDocs = [ { hello:'doc3' }, { hello:'doc4' } ];

  collection.insert(doc1, function(err, result){});
  collection.insert(doc2, {w:1}, function(err, result){});
  collection.insert(lotsOfDocs, {w:1}, function(err, result){});
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