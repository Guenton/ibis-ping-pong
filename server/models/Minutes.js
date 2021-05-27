const Sequelize = require("sequelize");
const db = require("../db");

const Minutes = db.define("hosts", {
  minute: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Minutes;
