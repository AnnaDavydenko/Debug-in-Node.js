const Sequelize = require('sequelize');
const user = require('./models/user');
const game = require('./models/game');
require('dotenv').config();
                                //database username   password
const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres'
});

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });

module.exports = {
    sequelize,
    User: user(sequelize, Sequelize.DataTypes),
    Game: game(sequelize, Sequelize.DataTypes)
};
