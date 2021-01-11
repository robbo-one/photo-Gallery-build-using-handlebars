const express = require('express')
const hbs = require('express-handlebars')

const server = express()
module.exports = server

const art = require('./art.json')

// Middleware
server.engine('hbs', hbs({
  extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))

// Routes

const viewData = {
  title: 'Gallery',
  art: art,
  footer: 'footer'
}

server.get('/', function(req, res) {
  res.render('home', viewData)
})