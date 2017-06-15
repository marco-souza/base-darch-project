let lodash          = require("lodash"),
    devConfig      = require("./webpack/dev.config");

// Merge with base config
let config = lodash.merge({}, devConfig);

// Export config
module.exports = config;
