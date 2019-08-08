// Import express
const express = require('express');

// Import Body parser
const bodyParser = require('body-parser');

// Import Mongoose
const mongoose = require('mongoose');

// Initialize Express app
const app = express();

// Import CORS
const cors = require('cors');

// Import routes
const apiRoutes = require("./app/routes/Router");

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Initialize CORS
app.use(cors());

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/global-api2', { useNewUrlParser: true });

const db = mongoose.connection;

// Connection check
if (!db)
    console.log("Issues with database connection")
else
    console.log("Database connected successfully")

// Set server port
const port = process.env.PORT || 8080;

// Send message for default URL
app.get('/', (req, res) => res.send('Server was running right <br> <a href="https://portal-ua.globallogic.com/gitlab/oleksandr.babin/global-social-api">Documentation</a> '));

// Use Api routes in the App
app.use('/api', apiRoutes);
// Run app to listen to specified port
app.listen(port, function() {
    console.log("Server live at " + "http://localhost:" + port + " ❤");
});