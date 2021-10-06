function bDayForm() {
    return (`
            <h1>Hey, is it your Birthday Today?</h1>
            <form action='/greet'>
            <label>Name</label>
            <input type="text" name="name" placeholder="Enter">
            <br>
            <br>
            <label>DoB</label>
            <input type="date" name="DoB" placeholder="Date of Birth">
            <input type="submit" value="Submit">
            </form>`
    )
}

module.exports = bDayForm;