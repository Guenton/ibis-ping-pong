const catchErr = require("../utils/catchErr");
const logger = require("../utils/logger");
const Hosts = require("../models/Hosts");

const deleteHost = async (req, res) => {
  const id = req.body.id || null;
  try {
    if (!id) throw "Database: No Host ID Was Received in Request to Delete";

    const deleted = await Hosts.destroy({ where: { id } });

    if (deleted) {
      okMsg = `Database: Remove Host with ID: ${id} - OK`;
      logger.info(okMsg);
      res.status(200).json(okMsg);
    } else {
      failMsg = `Database: Remove Host with ID: ${id} - NOT FOUND`;
      logger.warn(failMsg);
      res.status(400).json(failMsg);
    }
  } catch (err) {
    catchErr(err, res);
  }
};

module.exports = deleteHost;
