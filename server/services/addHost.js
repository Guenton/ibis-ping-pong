const catchErr = require("../utils/catchErr");
const logger = require("../utils/logger");
const Hosts = require("../models/Hosts");

const addHost = async (req, res) => {
  const host = req.body.host || "";
  try {
    if (!host) throw "Database: No Host Was Received in Request to Add";

    const created = await Hosts.create({ host });

    const msg = `Database: Add Host "${created.host}" with ID: ${created.id} - OK`;
    logger.info(msg);
    res.status(201).json(msg);
  } catch (err) {
    catchErr(err, res);
  }
};

module.exports = addHost;
