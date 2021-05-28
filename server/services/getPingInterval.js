const catchErr = require("../utils/catchErr");
const logger = require("../utils/logger");
const Interval = require("../models/Interval");

const getPingInterval = async (req, res) => {
  try {
    const { interval } = await Interval.findOne();

    res.status(200).json(interval);
    logger.info(`Database: Current Ping of ${interval} minutes sent to Client`);
  } catch (err) {
    catchErr(err, res);
  }
};

module.exports = getPingInterval;
