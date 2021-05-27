const db = require("./index");
const logger = require("../utils/logger");

const dbSync = async () => {
  try {
    await db.sync();
    logger.info("Database: Synchronized with Sequelize models");
  } catch (err) {
    logger.error(err);
  }
};

module.exports = dbSync;
