const express = require('express')
const app = express() 
const port = 3000 

function bDayCheck(name, DoB){
    if (name === undefined || DoB === undefined || name === ''|| DoB === '' )
    {         
        return (
            `<h1>Hey, is it your Birthday Today?</h1>
            <form>
            <label>Name</label>
            <input type="text" name="name" placeholder="Enter">
            <br>
            <br>
            <label>DoB</label>
            <input type="date" name="DoB" placeholder="Date of Birth">
            <input type="submit">
            </form>`
            ) 
    }    
    else{
        const today = new Date()
        const todayDate = `${today.getMonth()} ${today.getDate()}`
        const bDay = new Date(DoB)
        const birthDate = `${bDay.getMonth()} ${bDay.getDate()}`

        if(birthDate === todayDate){
            return `<h1>Happy Birthday, ${name}</h1>`
        } else {return `<h1>Hi ${name}</h1>`}
    }     
}

// Access the get method within app to send a request to get a response.
// Call the bDayCheck function within the response send method.
app.get('/dob', (req,res)=>{
    const {name, DoB} = req.query
    res.send(
    bDayCheck(name, DoB))
})

// Specify to the app to listen on the specific port hosted
app.listen(port,()=>{
    console.log(`Listener via port ${port}`)
})