// What do you need to require from your model.js?
const data = require('./data');

const insertSeeds = async () => {
  try {
    // declare a const that uses your table object from model.js to .bulkCreate()

    console.log(`Insert compeleted: ${data.length} pizzas were created.`);
  } catch (err) { 
    console.log('INSERT error: ' + err.message);
  } finally {
    await process.exit();
  }
}

// Something should be called
