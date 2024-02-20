// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an Express application
const app = express();

// Use middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route for the home page
app.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to our Form Page</h1>
        <form action="/submit" method="post">
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name"><br>
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email"><br><br>
            <input type="submit" value="Submit">
        </form>
    `);
});

// Define a route for form submission
app.post('/submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    res.send(`
        <h1>Form Submitted Successfully!</h1>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <a href="/">Back to Form</a>
    `);
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
