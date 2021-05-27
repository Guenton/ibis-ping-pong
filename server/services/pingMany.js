const ping = require("ping");
const catchErr = require("../utils/catchErr");
const logger = require("../utils/logger");

const pingMany = async (req, res) => {
  const hosts = req.body.hosts || [];
  try {
    if (hosts.length === 0) throw "Ping Many: No Hosts Were Received in Request";

    const probes = await Promise.all(hosts.map((host) => ping.promise.probe(host)));

    logger.info(`Ping Many: Hosts ${hosts}`);

    res.status(200).json(probes);
  } catch (err) {
    catchErr(err, res);
  }
};

module.exports = pingMany;
