const express = require('express')
const hbs = require('express-handlebars')
const art = require('./art.json')
const server = express()
module.exports = server

// Middleware
server.engine('hbs', hbs({
  extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))



// Routes
server.get('/', (req, res)  => {
  const greeting = res.render('home.hbs')
})

server.get('/gallery', (req, res) => {
  const title = "Hello, here are some pictures"
  const bottomText = "I like garlic bread"
  const viewData = {
    title: title,
    art: art,
    bottomText: bottomText,
  }
  const template =  'home'
  res.render(template, viewData, )
})



