// What's missing?
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
// Declare and require dependencies for server.js
const logger = require('morgan');
const bodyParser = require('body-parser');

// How about over here?
const { Pizza } = require('./model.js')
// Use middleware
app.use(logger('dev'));
app.use(bodyParser.json());

// Test server response
app.get('/', (request, response) => response.send(`<h1 style="text-align: center;">♪ Express yo self ♪</h1>`));


// Add your routes for get (all, one), and post
app.get('/allpizzas', async (request, response) => {
    try {
        const allPizzas = await Pizza.findAll();
        response.send(allPizzas);
    } catch(error) {
        console.log(`Hold up, error: ${error}`);
    } 
});

app.get('/pizzas/:id', async (request, response) => {
    try {
        const pizzaById = await Pizza.findByPk
        (request.params.id);
        response.json(pizzaById);
    } catch(error) {
        console.log(`Hold up, error: ${error}`);
    } 
});

app.post('/makeapizza', async (request, response) => {
    try{
     const makePizza = await Pizza.create(request.body);
     response.json(request.body);  
    } catch(error) {
        console.log(`Hold up, error: ${error}`);
    } 
});

// Finally, what's your server listening for?
app.listen(3000, () => {
    console.log(`Eating pizza on port 3000!`)
})

module.exports = app;
