// Generated by CoffeeScript 1.6.2
(function() {
  var async, client, mongo;

  mongo = require('mongodb');

  async = require('async');

  client = mongo.MongoClient;

  async.waterfall([
    function(next) {
      return client.connect("mongodb://localhost:27017/noname_app", next);
    }, function(db, next) {
      console.log("we are connected");
      return db.collection('people', next);
    }, function(peopleCollection, next) {
      return peopleCollection.find({
        name: "charles"
      }).toArray(next);
    }, function(docs, next) {
      return next(null, docs);
    }
  ], function(err, result) {
    if (err) {
      console.log(err);
    }
    return console.log(result);
  });

}).call(this);
