var path                = require("path"),
    webpack             = require("webpack"),
    ExtractTextPlugin   = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        "bar": "./src/bar/index.jsx",
        "button": "./src/button/index.jsx",
        "callout": "./src/callout/index.jsx",
        "code": "./src/code/index.jsx",
        "container": "./src/container/index.jsx",
        "dropdown": "./src/dropdown/index.jsx",
        "field": "./src/field/index.js",
        "form": "./src/form/index.jsx",
        "grid": "./src/grid/index.jsx",
        "i18n": "./src/i18n/index.js",
        "label": "./src/label/index.jsx",
        "menu": "./src/menu/index.jsx",
        "modal": "./src/modal/index.jsx",
        "progress": "./src/progress/index.js",
        "section": "./src/section/index.jsx",
        "spinner": "./src/spinner/index.js",
        "text": "./src/text/index.jsx",
        "toaster": "./src/toaster/index.jsx",
        "scroll": "./src/scroll/index.jsx",
        "location": "./src/location/index.js",
        "styles": "./src/styles/index.js",
        "index": "./src/index.js",
        "utils/index": "./src/utils/index.js",
        "utils/http": "./src/utils/http.js",
        "utils/logger": "./src/utils/logger.js",
        "utils/redux": "./src/utils/redux.js",
        "utils/storage": "./src/utils/storage.js",
        "utils/style": "./src/utils/style.js"
    },
    externals: [
        "ace-builds",
        "axios",
        "babel-polyfill",
        "classnames",
        "dom-helpers",
        "highlightjs",
        "hogan.js",
        "lodash",
        "moment",
        "crypto",
        /^prismjs/,
        "qs",
        "react",
        "react-addons-css-transition-group",
        "react-dom",
        "react-input-autosize",
        "react-redux",
        "react-router",
        "react-router-redux",
        "redux",
        "redux-actions",
        "redux-promise-middleware",
        function(context, request, callback) {
            var rgx = /^darch\/src\/(.*)/;

            if(rgx.test(request)) {
                var newRequest = request.replace(rgx, "darch/lib/$1");
                return callback(null, newRequest);
            }

            callback();
        }
    ],
    output: {
        path: "./lib",
        filename: "[name].js",
        library: "darch",
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    "style-loader",
                    {loader: "css-loader", options: {
                        modules: true,
                        sourceMap: false,
                        camelCase: true,
                        localIdentName: "[hash:base64:5]"
                    }},
                    {loader: "stylus-loader", options: {
                        preferPathResolver: "webpack"
                    }}
                ]
            },

            {
                test: /.jsx?$/,
                enforce: "pre",
                exclude: /node_modules|lodash|config/,
                use: [
                    {loader: "eslint-loader", options: {
                        emitWarning: true
                    }}
                ]
            },

            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {loader: "babel-loader", options: {
                        presets: ["latest", "react"],
                        plugins: [
                            "autobind-class-methods",
                            "transform-class-properties",
                            "transform-export-extensions",
                            "add-module-exports"
                        ]
                    }}
                ]
            },

            {
                test: /\.(png|jpg)$/,
                use: [
                    {loader: "url-loader", options: {
                        limit: 8192,
                        name: "images/[sha512:hash:base64:7].[ext]",
                        publicPath: "/assets/"
                    }}
                ]
            }
        ]
    },
    resolve: {
        alias: {
            "darch": path.resolve(__dirname, "..")
        },
        modules: [
            path.resolve(__dirname, "../"),
            path.resolve(__dirname, "../src"),
            path.resolve(__dirname, "../node_modules")
        ],
        extensions: [".js",".jsx",".styl",".css",".png",".jpg"]
    },
    node: {
        console: true,
        process: true,
        __filename: "mock",
        __dirname: "mock",
        fs: "empty",
        net: "empty",
        tls: "empty"
    },
    plugins: [
        new webpack.EnvironmentPlugin([
            "NODE_ENV"
        ])
    ]
};
