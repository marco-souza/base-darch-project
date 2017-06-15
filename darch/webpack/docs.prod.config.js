let lodash          = require("lodash"),
    //UglifyJSPlugin  = require("uglifyjs-webpack-plugin"),
    webpack         = require("webpack"),
    baseConfig      = require("./docs.config");

let config = lodash.merge({}, baseConfig);

// Add plugins
config.plugins = config.plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
        // Eliminate comments
        comments: false,

        // Compression specific options
        compress: {
            // remove warnings
            warnings: false,

            // Drop console statements
            drop_debugger: true
        }
    })
]);

module.exports = config;