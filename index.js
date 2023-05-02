const express = require('express')
const cors = require('cors')
const chefs = require('./data/chefs.json')
const app = express()
const port = process.env.PORT || 5000;


app.use(cors())

app.get('/', (req, res) =>{
    res.send('my server is running...')
})

app.get('/chef', (req, res) =>{
    res.send(chefs)
})

app.listen(port, () =>{
    console.log(`this server is running on port number ${port}`);
})