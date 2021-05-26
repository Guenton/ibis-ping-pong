const services = require("../services");

const router = (app) => {
  app.get("/list", (req, res) => services.getListOfPings(req, res));
  app.post("/ping", (req, res) => services.getPing(req, res));
};

module.exports = router;
