const catchErr = require("../utils/catchErr");
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
