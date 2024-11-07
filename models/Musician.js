const { Sequelize, sequelize } = require("../db");

 Musician = sequelize.define('Musician', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  instrument: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
module.exports = {
    Musician
};