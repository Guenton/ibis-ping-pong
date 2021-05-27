const ping = require("ping");
const catchErr = require("../utils/catchErr");
const logger = require("../utils/logger");
const Hosts = require("../models/Hosts");

const getListOfHosts = async (req, res) => {
  try {
    const hosts = await Hosts.findAll();

    res.status(200).json(hosts);
  } catch (err) {
    catchErr(err, res);
  }
};

module.exports = getListOfHosts;
