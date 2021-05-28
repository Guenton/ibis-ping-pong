const services = require("../services");

const router = (app) => {
  app.get("/probes", (req, res) => services.getListOfProbes(req, res));
  app.get("/hosts", (req, res) => services.getListOfHosts(req, res));
  app.post("/host", (req, res) => services.addHost(req, res));
  app.post("/delete", (req, res) => services.deleteHost(req, res));
  app.post("/ping", (req, res) => services.pingOne(req, res));
  app.post("/pings", (req, res) => services.pingMany(req, res));
  app.get("/interval", (req, res) => services.getPingInterval(req, res));
  app.post("/interval", (req, res) => services.setPingInterval(req, res));
  app.post("/state", (req, res) => services.runPingState(req, res));
};

module.exports = router;
