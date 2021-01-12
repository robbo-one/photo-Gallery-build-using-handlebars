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

test('Check for comments array in list', done => {
  request(server)
    .get('/artwork/2')
    .end((err, res) => {
      expect(err).toBeNull()
      const $ = cheerio.load(res.text)
      const expected = 2
      const actual = $('ul').length
      expect(expected).toBe(actual)
      done()
    })
})

test('Check artwork contains img', done => {
  request(server)
    .get('/artwork/1')
    .end((err, res) => {
      expect(err).toBeNull()
      const $ = cheerio.load(res.text)
      const actual = $('img').attr('src')
      console.log(actual)
      expect(actual).toBeTruthy()
      done()
    })
}) 