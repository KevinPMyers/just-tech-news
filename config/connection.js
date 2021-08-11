// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our database, pass in your MySql information for username and password
const sequelize = new Sequelize('just_tech_news_db', 'root', '?T!AatMaR_7z', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
  
  module.exports = sequelize;
  