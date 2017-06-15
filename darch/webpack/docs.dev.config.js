let lodash          = require("lodash"),
    path            = require("path"),
    baseConfig      = require("./docs.config");

// Merge with base config
let config = lodash.merge({}, baseConfig, {
    watch: true,
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, "../docs"),
        compress: true,
        port: 9000
    }
});

// Export config
module.exports = config;