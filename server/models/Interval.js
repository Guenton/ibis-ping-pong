const Sequelize = require("sequelize");
const db = require("../db");

const Interval = db.define("interval", {
  interval: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Interval;
