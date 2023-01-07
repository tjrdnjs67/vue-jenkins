const { defineConfig } = require('@vue/cli-service');
let path = require("path");
__dirname = path.resolve();

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: path.resolve(
    __dirname,
    "dist"
  ),
  publicPath : "/dist",
});
