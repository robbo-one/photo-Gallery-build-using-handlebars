const server = require("../server")
const request = require("supertest")
const cheerio = require("cheerio")

test ("tests are running", () => {
    expect(2).toBeGreaterThan(1)
})

test ("/ exists", done => {
    request(server)
    .get("/")
    .end((err, res) => {
        expect(res.status).toBe(200)
        done()
    })
})

test ("there are more than three artworks", done => {
    request(server)
    .get("/")
    .end((err, res) =>{
        const $ = cheerio.load(res.text)
        const actual = $('li').length
        expect(actual).toBeGreaterThan(3)
        done()
    })
})

test ("there is a link for each artwork", done => {
    request(server)
    .get("/")
    .end((err, res) => {
        const $ = cheerio.load(res.text)
        const expected = $("li").length
        const actual = $("a").length
        expect(actual).toEqual(expected)

        done()
    })
})