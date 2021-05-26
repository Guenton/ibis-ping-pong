const ping = require("ping");
const catchErr = require("../utils/catchErr");
const logger = require("../utils/logger");

const getPing = async (req, res) => {
  const host = req.body.host || "";
  try {
    const probe = await ping.promise.probe(host);
    if (probe.alive) {
      logger.info(`Host: ${probe.host} is alive ping time = ${probe.time}`);
    } else {
      logger.error(`Host: ${probe.host} is not responding`);
    }
    res.status(200).json(probe);
  } catch (err) {
    catchErr(err, res);
  }
};

module.exports = getPing;
