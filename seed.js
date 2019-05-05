// What do you need to require from your model.js?
const { Pizza } = require('./model.js')
const data = require('./data.js');

const insertSeeds = async () => {
  try {
    // declare a const that uses your table object from model.js to .bulkCreate()
    const pizzaData = await Pizza.bulkCreate(data);

    console.log(`Insert compeleted: ${data.length} pizzas were created.`);
  } catch (err) { 
    console.log('INSERT error: ' + err.message);
  } finally {
    await process.exit();
  }
}

// Something should be called
insertSeeds();
