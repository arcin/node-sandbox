expect = require('chai').expect
app = require('../server')
request = require('supertest')

describe("Routes", ->
  describe("/:name", ->
    it("should be ok", ->
      request(app)
      .get('/')
      .expect(200)
      .end((err, res)->
        console.log err if err
        done()
      )
    )
  )
)