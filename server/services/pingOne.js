const ping = require("ping");
const catchErr = require("../utils/catchErr");
const logger = require("../utils/logger");

const pingOne = async (req, res) => {
  const host = req.body.host || "";
  try {
    if (!host) throw "Ping One: No Host Was Received in Request";

    const probe = await ping.promise.probe(host);

    if (probe.alive) {
      logger.info(`Ping One: Host ${host} is alive ping time = ${probe.time}`);
    } else {
      logger.warn(`Ping One: Host ${host} is not responding`);
    }

    res.status(200).json(probe);
  } catch (err) {
    catchErr(err, res);
  }
};

module.exports = pingOne;
