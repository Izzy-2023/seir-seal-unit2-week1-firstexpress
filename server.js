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
// GREETINGS ROUTES
// ****************************

app.get("/greeting", (req, res) => {
    res.send("<h1>Hello, stranger!</h1>")
})


app.get("/greeting/:name", (req, res) => {
    const name = req.params.name
    res.send(`<h1>Hello ${name}! It's so great to see you!"</h1>`)
})

// ********************************
// TIP CALCULATOR ROUTES
// ********************************

app.get('/tip/:total/:tipPercentage', (req, res) => {
    const { total, tipPercentage } = req.params;
  
    // Validate input to ensure numbers are provided
    if (isNaN(total) || isNaN(tipPercentage)) {
      return res.status(400).send('Invalid parameters. Please provide valid numbers.');
    }
  
    // Calculate the tip
    const tipAmount = parseFloat(total) * (parseFloat(tipPercentage) / 100);
  
    // Send the calculated tip as a JSON response
    res.json({ tip: tipAmount.toFixed(2) });
  });

// *********************************
// MAGIC 8 BALL ROUTES
// *********************************

const responses = [
    "It is certain", "It is decidedly so", "Without a doubt", "Yes definitely",
    "You may rely on it", "As I see it yes", "Most likely", "Outlook good",
    "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later",
    "Better not tell you now", "Cannot predict now", "Concentrate and ask again",
    "Don't count on it", "My reply is no", "My sources say no",
    "Outlook not so good", "Very doubtful"
  ];
  
  app.get('/magic/:question', (req, res) => {
    const question = req.params.question.replace(/%20/g, ' '); // Replace %20 with spaces
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    const htmlResponse = `<h1>Your Question: ${question}</h1><h1>8 Ball Response: ${randomResponse}</h1>`;
    res.send(htmlResponse);
  });



// *****************************
// TURNING ON SERVER LISTENER
// WILL TELL OUR APP TO LISTEN FOR REQUESTS
// ON A CERTAIN PORT
// *****************************
// app.listen(PORT, FUNCTION)
// The function will run after the server turns on
app.listen(3000, () => {console.log("server is listening on port 3000")})