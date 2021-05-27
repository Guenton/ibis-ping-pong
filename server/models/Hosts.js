const Sequelize = require("sequelize");
const db = require("../db");

const Hosts = db.define("hosts", {
  host: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Hosts;
