const Sequelize = require("sequelize");
const db = require("../db");

const Probes = db.define("probes", {
  inputHost: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  host: {
    type: Sequelize.STRING,
  },
  numericHost: {
    type: Sequelize.STRING,
  },
  time: {
    type: Sequelize.INTEGER,
  },
  isAlive: {
    type: Sequelize.BOOLEAN,
  },
});

module.exports = Probes;
