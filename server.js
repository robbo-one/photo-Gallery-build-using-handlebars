const express = require('express')
const hbs = require('express-handlebars')

const routes = require('./routes')

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




server.get('/artworks/:id', function(req, res) {
  
  const id = req.params.id
  const artwork = art.find(art => art.id == id)
  res.render('artworks', artwork)

})

server.get('/', function (req, res, next) {
  res.render('home', {layout: false});
});