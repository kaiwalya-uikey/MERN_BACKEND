// app.js
// entry point 

const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// routes
const books = require('./routes/api/books');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));


// What is CORS. 
// CORS is shorthand for Cross-Origin Resource Sharing. 
// It is a mechanism to allow or restrict requested resources on a web server depend on where the 
// HTTP request was initiated. This policy is used to secure a certain web server from access by other website or domain.


// What does app use CORS ()) do?
// Calling use(cors()) will enable the express server to respond to preflight requests.
//  A preflight request is basically an OPTION request sent to the server before the actual request is sent, 
//  in order to ask which origin and which request options the server accepts.



// Init Middleware
app.use(express.json({ extended: false }));

// What is Express JSON with extended false?
// This option allows to choose between parsing the URL-encoded data with the 
// querystring library (when false) or the qs library (when true). 
// The “extended” syntax allows for rich objects and arrays to be encoded into the URL-encoded format, 
// allowing for a JSON-like experience with URL-encoded

// What does app use JSON Express do?
// Using express.json()
// It parses incoming JSON requests and puts the parsed data in req.


// What is the difference between app use and app get?
// app. get is called when the HTTP method is set to GET , whereas app. use is called regardless
//  of the HTTP method, and therefore defines a layer which is on top of all the other RESTful types 
//  which the express packages gives you access to.


app.get('/', (req, res) => res.send('Hello world!'));

// What is app get in node JS?
// The app. get() function routes the HTTP GET Requests to the path which is being specified with 
// the specified callback functions. Basically it is intended for binding the middleware to your application.
//  Syntax: app.get( path, callback )


// use Routes
app.use('/api/books', books);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));