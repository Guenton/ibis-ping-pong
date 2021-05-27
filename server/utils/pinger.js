const ping = require("ping");
const logger = require("./logger");
const Hosts = require("../models/Hosts");
const Probes = require("../models/Probes");
const Interval = require("../models/Interval");

const pinger = () => {
  // Set Default Interval to 10 seconds
  let millisecondInterval = 10000;

  setInterval(async () => {
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
            isAlive: item.alive,
          });
        })
      );

      // Get Interval for next call
      const { interval } = await Interval.findOne();
      millisecondInterval = interval * 60000;

      // Keep Log
      const dateTime = new Date().toLocaleString();
      logger.info(`Ping Interval: Set at ${interval} Minutes. Executed At ${dateTime}`);
    } catch (err) {
      console.log(err);
    }
  }, millisecondInterval);
};

module.exports = pinger;
