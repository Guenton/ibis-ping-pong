const logger = require("../utils/logger");
const Interval = require("../models/Interval");

const dbSetPingInterval = async (interval = process.env.INTERVAL) => {
  try {
    await Interval.upsert({ id: 1, interval });
    logger.info(`Database: Ping Interval Set to ${interval} minutes`);
  } catch (err) {
    logger.error(err);
  }
};

module.exports = dbSetPingInterval;
