const catchErr = require("../utils/catchErr");
const pinger = require("../utils/pinger");
const Interval = require("../models/Interval");
const logger = require("../utils/logger");

let pingerId;

const setPingState = async (req, res) => {
  const setState = req.body.setState || "";
  try {
    if (!setState) throw "Pinger: No setState was Submitted in the Request";

    if (setState === "on") {
      // Start Pinger
      const { interval } = await Interval.findOne();
      pingerId = pinger(interval);

      const msg = `Pinger: Has Been Started, Interval is ${interval} minutes`;
      logger.info(msg);
      res.status(200).json(msg);

      // Stop Pinger
    } else if (setState === "off") {
      clearInterval(pingerId);

      const msg = "Pinger: Has Been Stopped";
      logger.info(msg);
      res.status(200).json(msg);

      // Unrecognized setState Command
    } else {
      throw "Pinger: Submitted State was not Recognized by Server";
    }
  } catch (err) {
    catchErr(err, res);
  }
};

module.exports = setPingState;
