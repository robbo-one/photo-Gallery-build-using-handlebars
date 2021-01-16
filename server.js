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


//Create route that displays selected image when "/artworks///:id" is visited 
//1. Data (images) defined in params object
//2. object passed as second arg to res.render
//3. hbs template modified to use image
//IN PROGRESS

server.get ('/', (req, res) => {
  art.find()

  res.render('artworks', viewData) 
})

  


 
 