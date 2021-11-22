const path = require("path");
const PrerenderSpaPlugin = require("prerender-spa-plugin");

const productionPlugins = [
  new PrerenderSpaPlugin({
    staticDir: path.join(__dirname, "dist"),
    routes: ["/", "/questions/result/ENFJ"],
    renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
      renderAfterElementExists: "#app",
    }),
  }),
];

module.exports = {
  lintOnSave: false,
  configureWebpack: (config) => {
    console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV === "production") {
      config.plugins.push(...productionPlugins);
      console.log("//////////// production ///////////");
    }
  },
  devServer: {
    disableHostCheck: true,
  },
};
