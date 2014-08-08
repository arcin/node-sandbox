express = require 'express'
db = require './dbConnection'

app = express()


app.get('/:name', (req, res)->
  db.findPerson({name: req.params.name}).then((data)->
    res.send(data)
  )
)

app.listen(3000)