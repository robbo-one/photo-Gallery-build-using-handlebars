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
server.get('/', (req,res) => {
  // res.send(`<h1> Hi </h1>`)
  const viewData = {
    title: 'Gallery',
    art: art
  }
  res.render('home', viewData)
})
