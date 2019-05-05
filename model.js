// Require sequelize
const Sequelize = require('sequelize');

// Instantiate your database with sequelize
const db = new Sequelize({
    database: 'pizza_db',
    dialect:  'postgres',
    define:   {
      underscored: true,
      returning:   true,
    },
  });

// Define your pizza table with three attributes as type string: 
// flavor, description, location
const Pizza = db.define('data', {
    flavor: Sequelize.STRING,
    description: Sequelize.STRING,
    location: Sequelize.STRING
  });

// Finally, export both your db and table
module.exports = {
    db,
    Pizza
};
