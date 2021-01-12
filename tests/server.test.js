const server = require("../server")
const request = require("supertest")
const cheerio = require("cheerio")

test ("tests are running", () => {
    expect(2).toBeGreaterThan(1)
})