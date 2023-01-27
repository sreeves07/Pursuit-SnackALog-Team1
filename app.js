//DEPENDENCIES
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const snackController = require('./controllers/snacksController')
const app = express()

//MIDDLEWARE
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
//Snack Routes
app.use('/snacks', snackController)

app.get('/', (req, res) => {
    res.send('Welcome to the Snacks App!')
})

app.get('*', (req, res) => {
    res.status(404).send({ error: "Page not found!"})
})

//EXPORT
module.exports = app