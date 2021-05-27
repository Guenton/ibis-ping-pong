const db = require("./index");
const logger = require("../utils/logger");

const dbTest = async () => {
  try {
    await db.authenticate();
    logger.info("Database: Connection Test OK");
  } catch (err) {
    logger.error("Database: Connection Test Failed: " + err);
  }
};

module.exports = dbTest;
