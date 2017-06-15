/* global __dirname */
let path    = require("path");

module.exports = {
    app: {
        dest: path.resolve(__dirname,"dist"),

        src: {
            html: "./src/index.pug",
            sitemap: "./src/sitemap.xml",
            main_js: "./src/main.jsx",
            js: ["./src/**/*.js", "./src/**/*.jsx"],
            assets: [
                "./src/assets/icons/**/*"
            ],
            i18n: ["./src/assets/i18n/**/*"]
        },

        vendor: {
            css: [],
            assets: []
        }
    },
};
