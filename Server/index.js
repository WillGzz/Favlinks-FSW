/*
const express = require('express')
const db = require('./db')
//const cors = require('cors')
const path = require('path')

const app = express();

const PORT = process.env.PORT || 3000

//We are connecting the server side to the client side

//sets the path to the client folder
const clientPath = path.resolve(__dirname, '../client/dist')

//Create a new route that serves up the static files in your client folder
app.use(express.static(clientPath))

app.use(cors())

app.use(express.json());

app.get('/', (req, res) => {
  
    res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'))
    })

    //this command allow us to start the server node server/index.js

app.listen(PORT, () => {
  console.log(`Server is live on port ${PORT}`)
    })
    
        
//CRUD APPLICATION
app.get('/api/links', db.getLinks);
app.post('/api/links', db.createLinks);
app.put('/api/links/:id', db.updateLinks); 
app.delete('/api/links/:id', db.deleteLinks); 


module.exports = app;
     
   */     