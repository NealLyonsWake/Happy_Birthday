function greetCheck(name, DoB) {
    if (name === undefined || DoB === undefined || name === '' || DoB === '') {
        return (`
            <h1>You need to give your name AND birthday</h1>
            <form action='/'>
            <input type="submit" value="Back">
            </form>
            `)
    }
    else {
        const today = new Date()
        const todayDate = `${today.getMonth()} ${today.getDate()}`
        const bDay = new Date(DoB)
        const birthDate = `${bDay.getMonth()} ${bDay.getDate()}`

        if (birthDate === todayDate) {
            return `<h1>Happy Birthday, ${name}</h1>`
        } else { return `<h1>Hi ${name}</h1>` }
    }
}

module.exports = greetCheck