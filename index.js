const express = require('express')
const app = express()
const port = 3000
const bDayForm = require('./BdayForm')
const greetCheck = require('./GreetCheck')

// Access the get method within app to send a request to get a response.
// Call the bDayCheck function within the response send method.
app.get('/', (req, res) => {
    res.send(
        bDayForm())
})

app.get('/greet', (req, res) => {
    const { name, DoB } = req.query
    res.send(
        greetCheck(name, DoB))
})

// Specify to the app to listen on the specific port hosted
app.listen(port, () => {
    console.log(`Listener via port ${port}`)
})