const path = require('path');
const { Sequelize, Model } = require('sequelize');

// TODO - create the new sequelize connection
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, "database.sqlite"), 
});
// console.log(sequelize);

module.exports = {
    sequelize,
    Sequelize
};
