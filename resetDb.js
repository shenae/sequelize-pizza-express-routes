// What do you need to require from your model.js for resetDb.js?
const { db } = require('./model.js');

const resetDb = async () => {
  // await sync({ force: true })
    await db.sync({force: true});
    process.exit();
}

// Call something perhaps?
resetDb();
