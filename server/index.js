const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const routes = require("./routes");
const logger = require("./utils/logger");
const dbSetup = require("./db/dbSetup");
const pinger = require("./utils/pinger");

const app = express();
const port = process.env.PORT || 3002;

// Initialize Database
dbSetup();

// Continuous Pings
pinger();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use("/", express.static(path.join(__dirname, "../client")));

// Pass incoming calls to route handler
routes(app);

app.listen(port, () => logger.info("IBIS Ping-Pong: Listening on port: " + port));
