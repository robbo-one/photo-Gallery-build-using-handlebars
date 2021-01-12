const request = require('supertest')
const cheerio = require('cheerio')

const server = require('./server')

test('tests are running', () => {
  expect(2).toBeGreaterThan(1)
})

test('/ exists', done => {
  request(server)
    .get('/')
    .end((err, response) => {
      expect(err).toBeNull()

      expect(response.status).toBe(200)

      done()
    })
})


test('Persons name appears in an h1 tag', done => {
  const expected = 'Gallery'

  request(server)
    .get('/')
    .end((err, response) => {

      const $ = cheerio.load(response.text)
      
      const actual = $('h1').text() //.text()
      // console.log(response.text)
      expect(actual).toEqual(expected)

      done()
    })
})