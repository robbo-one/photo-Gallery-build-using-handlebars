const express = require('express')
const hbs = require('express-handlebars')
const art = require('./art.json')

const server = express()


// Middleware
server.engine('hbs', hbs({
  extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))

// Routes
server.get('/', (req, res) => {
  
  const viewData = {
    title: 'Gallery',
    art: art,
    }

  const template = 'home'
  res.render(template, viewData)

  res.render('home.hbs')
  
})

module.exports = server