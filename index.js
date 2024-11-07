const { Band } = require('./models/Band')
const { Musician } = require('./models/Musician')
const { Song } = require("./models/Song")
const { sequelize } = require("./db");
// Define associations here



module.exports = {
    Band,
    Musician,
    Song
};
