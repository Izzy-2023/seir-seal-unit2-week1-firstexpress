//*************************** */
// DEPENDENCIES
// Brings things from libraries and other files
//*************************** */
// require('thing'): it will return the exported value of the library or file we specify

//import the express library
const express = require("express")


//*************************** */
// Create Express Application Object
// This is the center of our express universe
//**************************** */
// express(): returns an express application object

const app = express()



//*****************************
// ROUTES
// Which function should run for differnt (method/url) pairs
// ****************************

app.get("/greeting", (req, res) => {
    res.send("<h1>Hello, stranger!</h1>")
})


app.get("/greeting/:name", (req, res) => {
    const name = req.params.name
    res.send(`<h1>Hello ${name}! It's so great to see you!"</h1>`)
})


// *****************************
// TURNING ON SERVER LISTENER
// WILL TELL OUR APP TO LISTEN FOR REQUESTS
// ON A CERTAIN PORT
// *****************************
// app.listen(PORT, FUNCTION)
// The function will run after the server turns on
app.listen(3000, () => {console.log("server is listening on port 3000")})