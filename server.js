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

server.get('/artworks/:id', (req, res) => {
 
  const artid = art.find(element => {
    return element.id == req.params.id
  })
  
console.log(artid)
  const template = 'artworks'
  res.render(template, artid)
})

module.exports = server