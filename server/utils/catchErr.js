const logger = require("./logger");

const internalErrorMsg = "An Internal Server error has occured";
const generalErrorMsg = "A General Server error has occured";

const catchErr = (err, res, msg) => {
  // Handle Connection Error Case
  if (err.code === "ECONNREFUSED") {
    const errorMsg = msg || internalErrorMsg;
    logger.error("Failed to Connect to: " + err.config.url);
    res.status(500).send(errorMsg);

    // Handle error response from backend
  } else if (err.response) {
    // Handle backend replied with an error message
    if (err.response.data) {
      const errorMsg = msg || err.response.data;
      logger.error(err.response.data);
      res.status(err.response.status).send(errorMsg);

      // Handle backend replied without any message
    } else {
      const errorMsg = msg || internalErrorMsg;
      logger.error(err.response);
      res.status(500).send(errorMsg);
    }

    // Handle unknown error case
  } else {
    const errorMsg = msg || generalErrorMsg;
    logger.error(err);
    res.status(500).send(errorMsg);
  }
};

module.exports = catchErr;
