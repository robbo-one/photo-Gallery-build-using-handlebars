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

server.get('/artwork/:id', (req, res) => {
  const id = req.params.id
  const artwork = art.find(art => art.id == id)
  
  res.render('artworks', artwork)
})
