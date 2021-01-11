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
const viewData = {
  title: 'Gallery',
  art: art
}

server.get('/', (req, res) => {
  res.render('home', viewData)

})

server.get('/artworks/:id', (req, res) => {
  let viewData = {
    artwork: ""
  }
  if (req.params.id === '1') {
    viewData.artwork = art.find(pic => pic.id === 1).artwork
  } else if(req.params.id === '2') {
    viewData.artwork = art.find(pic => pic.id === 2).artwork
  } else if(req.params.id === '3') {
    viewData.artwork = art.find(pic => pic.id === 3).artwork
  }else if(req.params.id === '4') {
    viewData.artwork = art.find(pic => pic.id === 4).artwork
  } else {
    res.send("No ID related to image found")
  }
  res.render("artworks", viewData)
})