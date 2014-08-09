express = require 'express'
db = require './lib/dbConnection'

app = express()
exports = module.exports = {}

app.get('/people/:name', (req, res)->
  db.findPerson({name: req.params.name}, (err, person)->
    res.send("<h1>#{person.name}</h1>")
  )
)



app.listen(3000)

module.exports = app