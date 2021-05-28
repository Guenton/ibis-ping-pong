const ping = require("ping");
const logger = require("./logger");
const Hosts = require("../models/Hosts");
const Probes = require("../models/Probes");

const pinger = (interval = process.env.INTERVAL) => {
  const millisecondInterval = interval * 60000;

  return setInterval(async () => {
    try {
      // Get All Hosts from DB
      const hosts = await Hosts.findAll();

      // Ping Each Host
      const probes = await Promise.all(hosts.map((item) => ping.promise.probe(item.host)));

      // Store Each Probe
      const stored = await Promise.all(
        probes.map((item) => {
          Probes.create({
            inputHost: item.inputHost,
            host: item.host,
            numericHost: item.numeric_host,
            time: item.time,
            timestamp: new Date(),
            isAlive: item.alive,
          });
        })
      );

      // Keep Log
      const dateTime = new Date().toLocaleString();
      logger.info(`Pinger: Interval is ${interval} Minutes. Last Executed At ${dateTime}`);
    } catch (err) {
      logger.error(err);
    }
  }, millisecondInterval);
};

module.exports = pinger;
