mongo = require 'mongodb'

client = mongo.MongoClient

client.connect("mongodb://localhost:27017/noname_app", (err, db)->
  console.log "there was an error" if err
  console.log "we are connected!" unless err
)
