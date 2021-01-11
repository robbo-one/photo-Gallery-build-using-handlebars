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
server.get('/home', (req, res) => {
  const viewData = {
    title: 'Gallery',
    art: art
  }
  const template = 'home'
  res.render(template, viewData)

})

server.get('/artworks/:id', (req, res) => {
  const viewData = {
    title: art.find(element => element.id == req.params.id).title,
    artwork : art.find(element => element.id == req.params.id)
  }
  res.render('artworks', viewData)
})