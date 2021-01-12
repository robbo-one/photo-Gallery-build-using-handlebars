const server = require('../server.js')
const request = require('supertest')
const cheerio = require('cheerio')

test('tests are testing', () => {
  expect(2).toBe(2)
})

test("check route for '/' exists", done => {
  request(server)
    .get('/')
    .end((err, res) => {
      expect(err).toBeNull()
      expect(res.status).toBe(200)
      done()
    })
})
