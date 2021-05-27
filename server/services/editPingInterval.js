const catchErr = require("../utils/catchErr");
const logger = require("../utils/logger");
const Interval = require("../models/Interval");

const editPingInterval = async (req, res) => {
  const interval = req.body.interval || "";
  try {
    if (!interval) throw "Database: No Interval was Received in Request to Edit";

    await Interval.upsert({ id: 1, interval });

    const msg = `Database: Ping Interval Set to ${interval} minutes`;
    logger.info(msg);
    res.status(200).json(msg);
  } catch (err) {
    catchErr(err, res);
  }
};

module.exports = editPingInterval;
