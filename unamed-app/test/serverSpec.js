// Generated by CoffeeScript 1.6.2
(function() {
  var app, expect, request;

  expect = require('chai').expect;

  app = require('../server');

  request = require('supertest');

  describe("Routes", function() {
    return describe("/people/:name", function() {
      return it("should return the persons name", function(done) {
        return request(app).get('/people/charles').expect('<h1>charles</h1>').end(function(err, res) {
          if (err) {
            console.log(err);
          }
          return done();
        });
      });
    });
  });

}).call(this);