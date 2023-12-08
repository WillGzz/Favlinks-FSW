const express = require('express')

const path = require('path')

const app = express();

const PORT = 3000

//We are connecting the server side to the client side

//sets the path to the client folder
const clientPath = path.resolve(__dirname, '../client/dist')

//Create a new route that serves up the static files in your client folder
app.use(express.static(clientPath))

app.get('/', (req, res) => {
    // we'll do some stuff here
    res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'))
    })

    //this command allow us to start the server node server/index.js

    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`)
        })
        