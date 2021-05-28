module.exports = {
  apps: [
    {
      name: "IBIS Ping-Pony Server",
      script: "../ibis-ping-pong/server/index.js",
      watch: false,
      env: {
        INTERVAL: 15,
      },
      env_production: {
        INTERVAL: 15,
      },
    },
    {
      name: "IBIS Ping-Pony Client",
      script: "../ibis-ping-pony/node_modules/nuxt/bin/nuxt.js",
      args: "start",
      watch: false,
      env: {
        BASE_URL: "http://localhost:3002",
      },
      env_production: {
        BASE_URL: "http://localhost:3002",
      },
    },
  ],
};
