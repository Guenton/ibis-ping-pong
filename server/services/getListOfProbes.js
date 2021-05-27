const Probes = require("../models/Probes");
const catchErr = require("../utils/catchErr");

const getListOfProbes = async (req, res) => {
  try {
    const probes = await Probes.findAll();

    res.status(200).json(probes);
  } catch (err) {
    catchErr(err, res);
  }
};

module.exports = getListOfProbes;
