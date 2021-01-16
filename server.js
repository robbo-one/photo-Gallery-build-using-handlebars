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
//Set Home route. Looks at home.hbs, sees {{title}}, gets title value from viewData object and renders on screen
server.get ('/', (req, res) => {
  const viewData = { 
    title: 'Gallery',
    art: art
  }
  console.log("viewData")

  const template = 'home'
  res.render('home', viewData) 
})
//See list of titles, artist, etc. Render goes to home. Home refers to >artwork summary partial which sees keys in art object and grabs their values (name, url, license etc) from viewData.art


//Route that displays image when user goes to /artworks/:id (eg /artworks/1
//Render goes to artworks template which has {{artwork}} and gets artwork data object defined in Line 3 of the function.
server.get ('/artworks/:id', (req, res) => {
  const id = req.params.id
  const artwork = art.find(art => art.id == id)
  res.render('artworks', artwork) 
})

  



 
 