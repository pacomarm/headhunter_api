// Third-party
const express = require('express')
// const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 3000
// Local
const store = require('./store.js')

// Configure middlewares
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/talent', (req, res) =>{
    res.status(200)
    res.json({
        status: true,
        talents: store.getTalent()
    })
})

app.post('/talent', (req, res) => {
    const talent = req.body
    console.log('talent to add', talent)
    store.createTalent(talent)
    res.status(201)
    res.json({
        status: true,
    })
})


app.listen(port, () => {
    console.log(`Hello from port ${port}!`) 
})
