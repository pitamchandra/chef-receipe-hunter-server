const express = require('express')
const app = express()
const chefs = require('./data/chefs.json')
const port = process.env.PORT || 5000;


app.get('/', (req, res) =>{
    res.send('my server is running...')
})

app.get('/chef', (req, res) =>{
    res.send(chefs)
})

app.listen(port, () =>{
    console.log(`this server is running on port number ${port}`);
})