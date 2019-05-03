// What's missing?

// Declare and require dependencies for server.js
const logger = require('morgan');
const bodyParser = require('body-parser');

// How about over here?

// Use middleware
app.use(logger('dev'));
app.use(bodyParser.json());


// Test server response
app.get('/', (request, response) => response.send(`<h1 style="text-align: center;">♪ Express yo self ♪</h1>`));


// Add your routes for get (all, one), and post


// Finally, what's your server listening for?


module.exports = app;
