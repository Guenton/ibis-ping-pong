const db = require("./index");
const logger = require("../utils/logger");

const dbSync = async (force = false) => {
  try {
    await db.sync(force);
    logger.info("Database: Synchronized with Sequelize models");
  } catch (err) {
    logger.error("Database: Connection Synchronization Failed: " + err);
  }
};

module.exports = dbSync;
