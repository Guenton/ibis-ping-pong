const ping = require("ping");
const logger = require("./logger");

const hosts = ["192.168.1.2", "google.com", "yahoo.com"];

const pinger = async () => {
  hosts.forEach((host) =>
    ping.promise.probe(host).then((res) => {
      if (res.alive) {
        logger.info(`Host: ${res.host} is alive ping time = ${res.time}`);
      } else {
        logger.error(`Host: ${res.host} is not responding`);
      }
    })
  );
};

module.exports = pinger;
