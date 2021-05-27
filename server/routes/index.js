const services = require("../services");

const router = (app) => {
  app.get("/probes", (req, res) => services.getListOfProbes(req, res));
  app.get("/hosts", (req, res) => services.getListOfHosts(req, res));
  app.post("/host", (req, res) => services.addHost(req, res));
  app.delete("/host", (req, res) => services.deleteHost(req, res));
  app.post("/ping", (req, res) => services.pingOne(req, res));
  app.post("/pings", (req, res) => services.pingMany(req, res));
  app.put("/interval", (req, res) => services.editPingInterval(req, res));
  app.post("/state", (req, res) => services.setPingState(req, res));
};

module.exports = router;
