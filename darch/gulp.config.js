let lodash  = require('lodash'),
    path    = require('path');

module.exports = {
    docs: {
        dest: path.resolve(__dirname,'docs'),

        src: {
            html: './docs/src/index.pug',
            sitemap: './docs/src/sitemap.xml',
            main_js: './docs/src/main.jsx',
            js: ['./docs/src/**/*.js', './docs/src/**/*.jsx'],
            assets: [
                './docs/src/assets/icons/**/*'
            ],
            i18n: ['./docs/src/assets/i18n/**/*']
        },

        vendor: {
            css: [],
            assets: []
        }
    },

    lib: {
        dest: path.resolve(__dirname,'lib'),
    }
};
