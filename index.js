// Third-party
const express = require('express')
// const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 3000
// Local
const store = require('./store.js')
const { validateTalent } = require('./validations.js')

// Configure middlewares
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

// Validation

app.get('/talent', (req, res) =>{
    res.status(200)
    res.json({
        status: true,
        talents: store.getTalent()
    })
})

app.post('/talent', (req, res) => {
    const talent = req.body
    
    if(!validateTalent(talent)){
        return res.status(400).json({
            status: false,
            message: 'Invalid Talent Object Structure'
        })
    }

    const result = store.createTalent(talent)
    if(!result){
        return res.status(409).json({
            status: false,
            message: 'Duplicate Talent'
        })
    }
    res.status(201).json({
        status: true,
    })
})


app.listen(port, () => {
    console.log(`Hello from port ${port}!`) 
})
