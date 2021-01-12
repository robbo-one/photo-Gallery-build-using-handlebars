const request = require("supertest");
const cheerio = require('cheerio')
const server = require('../server.js')

test('tests are running', () => {
    expect(2).toBeGreaterThan(1)
  })

//   test('/ exists', done => {
//     request(server)
//       .get('/')
//       .end((err, res => {
//         expect(err).toBeNull()
  
//         expect(res.status).toBe(200)
  
//         done()
//       })
//   })

test('ID tag is found', done => {
    request(server)
        .get('/artworks/:id')
        .end((err, res) => {
            expect(err).toBeNull()
            expect(res.status).toBe(500)
            expect(res.text.link(""))
            // expect(res.text).toEqual()
            done()
        })
})