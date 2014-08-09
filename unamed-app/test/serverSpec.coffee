expect = require('chai').expect
app = require('../server')
request = require('supertest')

describe("Routes", ->
  describe("/people/:name", ->
    it("should return the persons name", (done)->
      request(app)
      .get('/people/charles')
      .expect('<h1>charles</h1>')
      .end((err, res)->
        console.log err if err
        done()
      )
    )
  )
)