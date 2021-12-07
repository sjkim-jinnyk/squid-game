module.exports = {
  apps: [
    {
      name: "squid-game",
      exec_mode: "cluster",
      instances: "4", // Or a number of instances
      script: "./node_modules/nuxt/bin/nuxt.js",
      args: "start",
    },
  ],
};
