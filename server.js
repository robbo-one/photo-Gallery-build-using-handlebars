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
server.get ('/', (req, res) => {

  const viewData = {
    title: 'Gallery',
    art: 'kea', 
      "id": 1,
    "title": "Kea in Flight",
    "comments": [
      "Very arty."
    ],
    "artwork": "images/kea.jpg",
    "artist": {
      "name": "Ben",
      "url": "https://www.flickr.com/photos/seabirdnz/"
    },
    "license": {
      "name": "CC BY-ND 2.0",
      "url": "https://creativecommons.org/licenses/by-nd/2.0/"
    }
  }
  const template = 'home'
  res.render('home', viewData) 
})
  
  
