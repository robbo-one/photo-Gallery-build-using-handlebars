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
    art: art
  }
  console.log(viewData)

  const template = 'home'
  res.render('home', viewData) 
})

//Create route that displays selected image when "/artworks///:id" is visited 
//1. Data (images) defined in params object
//2. object passed as second arg to res.render
//3. hbs template modified to use image
//IN PROGRESS

server.get ('/:id?', (req, res) => {
  
  const params = {
    image1: "Kea in Flight",
    image2: "Kowhai Flowers",
    image3: "Kotare",
    image4: "Harakeke Flowers"
  }

//   for 
//   (let i = 0; i < params.length; i++) {
//   if req.params.id = art.find('id')) {
//       res.render('artworks', params)
//   }
// })
}





 
 