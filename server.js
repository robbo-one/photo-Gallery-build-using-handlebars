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
//Set Home route. Looks at home.hbs, sees {{title}}, gets title value from viewData object and renders on screen. json object is called 'art.
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


//Route that displays image when user goes to /artworks/:id:
//ID entered finds art.id image and saves it as 'artwork".
//Render goes to artworks template which has {{artwork}} and renders it with 'artwork' object defined in previous line of function.
server.get ('/artworks/:id', (req, res) => {
  const id = req.params.id 
  const artwork = art.find(art => art.id == id) 
  res.render('artworks', artwork) 
})

 //Link to home page from image view (partial). If user clicks on home link from image.




 
 