express = require 'express'
mongo = require 'mongodb'
app = express()
client = mongo.MongoClient

client.connect("mongodb://localhost:27017/noname_app", (err, db)->
  unless err
    console.log "we are connected!"
)

app.get('/', (req, res)->
  res.send('Hello World')
)

app.listen(3000)