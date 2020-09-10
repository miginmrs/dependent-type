"use strict";

const path = require("path");
const webpack = require("webpack");

module.exports = env => {
  let filename = "depmap.umd.js", devtool = {devtool: "source-map"};
  let mode = "development";
  if (env && env.production) {
    filename = "depmap.min.umd.js";
    mode = "production";
    devtool= {};
  }
  return {
    ...devtool,
    context: path.join(__dirname, "./"),
    entry: {
      index: "./source/map.ts"
    },
    mode,
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: {
            loader: "ts-loader",
            options: {
              compilerOptions: {
                declaration: false
              },
              configFile: "tsconfig-dist-cjs.json"
            }
          }
        }
      ]
    },
    output: {
      filename,
      library: "depmap",
      libraryTarget: "umd",
      path: path.resolve(__dirname, "./bundles")
    },
    devtool: 'source-map',
    resolve: {
      extensions: [".ts", ".js"]
    }
  };
};
