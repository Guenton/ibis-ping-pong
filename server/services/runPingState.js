const catchErr = require("../utils/catchErr");
const pinger = require("../utils/pinger");
const Interval = require("../models/Interval");
const logger = require("../utils/logger");
const e = require("express");

let pingerId;

const runPingState = async (req, res) => {
  const trigger = req.body.trigger || "";
  try {
    if (!trigger) throw "Pinger: No Trigger was Submitted in the Request";

    if (trigger === "on") {
      // Start Pinger
      const { interval } = await Interval.findOne();
      pingerId = pinger(interval);

      const msg = `Pinger: Has Been Started, Interval is ${interval} minutes`;
      logger.info(msg);
      res.status(200).json(msg);

      // Stop Pinger
    } else if (trigger === "off") {
      if (pingerId) clearInterval(pingerId);

      const msg = "Pinger: Has Been Stopped";
      logger.info(msg);
      res.status(200).json(msg);

      // Check if Pinger is Running
    } else if (trigger === "check") {
      const isPinging = pingerId && !pingerId._destroyed ? true : false;
      res.status(200).json(isPinging);
      logger.info(`Pinger: Current State sent to client as: "${isPinging}"`);

      // Unrecognized trigger Command
    } else {
      throw "Pinger: Submitted State was not Recognized by Server";
    }
  } catch (err) {
    catchErr(err, res);
  }
};

module.exports = runPingState;
