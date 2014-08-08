mongo = require 'mongodb'
async = require 'async'

client = mongo.MongoClient

findPerson = (restrictions, callback)->
  async.waterfall([
    (done)->
      client.connect("mongodb://localhost:27017/noname_app", done)
    , (db, done)->
        console.log "we are connected"
        db.collection('people', done)
    , (peopleCollection, done)->
        peopleCollection.findOne(restrictions, done)
    , (docs, done)->
        done(null, docs)
  ], (err, person)->
    callback err if err
    callback(null, person)
  )

module.exports.findPerson = findPerson