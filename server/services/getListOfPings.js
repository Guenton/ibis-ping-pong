const ping = require("ping");
const catchErr = require("../utils/catchErr");
const logger = require("../utils/logger");

const getListOfPings = async (req, res) => {
  const hosts = req.body.hosts || [];
  // const probes = [];
  try {
    const probes = Promise.all(hosts.map((host) => ping.promise.probe(host)));
    // for (let host of hosts) {
    //   let probe = await ping.promise.probe(host);
    //   probes.push(probe);
    // }
    // const probe = await ping.promise.probe(host);
    res.status(200).json(probes);
  } catch (err) {
    catchErr(err, res);
  }
};

module.exports = getListOfPings;
