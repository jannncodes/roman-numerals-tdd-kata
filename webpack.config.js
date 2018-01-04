module.exports = {
  entry: {
    app: "./src/index.js",
    test: "./test/index.js",
  },
  output: {
    path: __dirname,
    filename: "./build/js/[name].js",
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loaders: [],
      }
    ]
  }
};
