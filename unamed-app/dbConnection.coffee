mongo = require 'mongodb'
async = require 'async'

client = mongo.MongoClient


async.waterfall([
  (next)->
    client.connect("mongodb://localhost:27017/noname_app", next)
  , (db, next)->
      console.log "we are connected"
      db.collection('people', next)
  , (peopleCollection, next)->
      peopleCollection.find({name: "charles"}).toArray(next)
  , (docs, next)->
      next(null, docs)
], (err, result)->
  console.log err if err
  console.log(result)
)