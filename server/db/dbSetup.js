const dbTest = require("./dbTest");
const dbSync = require("./dbSync");
const dbSetPingInterval = require("./dbSetPingInterval");
const logger = require("../utils/logger");

const dbSetup = async (interval = process.env.INTERVAL) => {
  try {
    await dbTest();
    await dbSync();
    await dbSetPingInterval();
  } catch (err) {
    logger.error(err);
  }
};

module.exports = dbSetup;
