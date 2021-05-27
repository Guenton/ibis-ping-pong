const Minutes = require("../models/Minutes");

const setPingInterval = async (interval = null) => {
  try {
    const found = await Minutes.findOne();

    console.log(found);
  } catch (err) {
    throw err;
  }
};

module.exports = setPingInterval;
