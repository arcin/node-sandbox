var http = require('http'),
    port = process.env.PORT || 3000,
    MongoClient = require('mongodb').MongoClient,
    message = 'success';

MongoClient.connect("mongodb://localhost:27017/exampleDB", function(err, db){
  if (err) console.log(err.message);

  console.log('connection successful');
  var collection = db.collection('test');
  var doc = { mykey:1, fieldtoupdate:1 };

  collection.insert(doc, {w:1}, function(err, result){
    collection.update({ mykey:1 }, { $set:{ fieldtoupdate:2 } }, { w:1 }, function(err, result) {});
    collection.update({ hello: "doc4" }, { $set:{ hello: 'special doc' } }, {w:1}, function(err, result){});
  });

  var doc2 = { mykey:2, docs:[ { doc1:1 } ] };

  collection.insert(doc2, { w:1 }, function(err, result){
    collection.update( { mykey:2 }, { $push:{ docs:{ doc2:1 } } },  {w:1}, function(err, result){});
  });
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