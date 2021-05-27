const services = require("../services");

const router = (app) => {
  app.get("/list", (req, res) => services.getListOfPings(req, res));
  app.get("/hosts", (req, res) => services.getListOfHosts(req, res));
  app.post("/host", (req, res) => services.addHost(req, res));
  app.delete("/host", (req, res) => services.deleteHost(req, res));
  app.post("/ping", (req, res) => services.pingOne(req, res));
  app.post("/pings", (req, res) => services.pingMany(req, res));
};

module.exports = router;
