let gulp                = require("gulp"),
    gutil               = require("gulp-util"),
    file                = require("gulp-file"),
    pug                 = require("gulp-pug"),
    yaml                = require("gulp-yaml"),
    htmlmin             = require("gulp-htmlmin"),
    jsonmin             = require("gulp-jsonmin"),
    lodash              = require("lodash"),
    del                 = require("del"),
    path                = require("path"),
    webpack             = require("webpack"),
    config              = require("common-config"),
    gulpConfig          = require("./gulp.config");

let statsInfo = {
    colors: gutil.colors.supportsColor,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false,
    modules: false,
    children: true,
    version: true,
    cached: false,
    cachedAssets: false,
    reasons: false,
    source: false,
    errorDetails: false
};

let bundleDoneCalled = {};

/****************************************************************
* Clean Tasks : remove destination folders
****************************************************************/
gulp.task("clean:docs", function() {
    return del.sync([
        gulpConfig.docs.dest+"/assets",
        gulpConfig.docs.dest+"/index.html",
    ]);
});

gulp.task("clean:lib", function() {
    return del.sync([
        gulpConfig.lib.dest+"/*"
    ]);
});

/****************************************************************
* Config Task : write config to config folder
****************************************************************/
gulp.task("config", function() {
    var str = ("module.exports = "+JSON.stringify(config, null, 4));

    return file("index.js", str, { src: true })
    .pipe(gulp.dest("./config"));
});

/****************************************************************
* Assets Task : copy assets to dist
****************************************************************/
gulp.task("assets:docs", function() {
    return gulp.src(gulpConfig.docs.src.assets)
    .pipe(gulp.dest(gulpConfig.docs.dest+"/assets"));
});

/****************************************************************
* i18n Task : compile i18n yaml setups
****************************************************************/
gulp.task("i18n:docs", function() {
    return gulp.src(gulpConfig.docs.src.i18n)
    .pipe(yaml({space: 4}))
    .pipe(jsonmin())
    .pipe(gulp.dest(gulpConfig.docs.dest+"/assets/i18n"));
});

gulp.task("i18n:docs:dev", function() {
    return gulp.src(gulpConfig.docs.src.i18n)
    .pipe(yaml({space: 4}))
    .pipe(gulp.dest(gulpConfig.docs.dest+"/assets/i18n"));
});

/****************************************************************
* Pug Task : compile pug templates
****************************************************************/
gulp.task("pug:docs", function(done) {
    return gulp.src(gulpConfig.docs.src.html)
    .pipe(pug({
        locals: config.webinfo
    }))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(gulpConfig.docs.dest));
});

gulp.task("pug:docs:dev", function(done) {
    return gulp.src(gulpConfig.docs.src.html)
    .pipe(pug({
        locals: config.webinfo
    }))
    .pipe(gulp.dest(gulpConfig.docs.dest));
});

/****************************************************************
* Bundle Docs Tasks : bundle all docs js files into one
****************************************************************/
gulp.task("bundle:docs", function(done) {
    webpack(require("./webpack/docs.prod.config"), function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);

        gutil.log("[webpack]", stats.toString(statsInfo));

        if(!bundleDoneCalled.docs){
            bundleDoneCalled.docs = true;
            done();
        }
    });
});

gulp.task("bundle:docs:dev", function(done) {
    webpack(require("./webpack/docs.dev.config"), function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);

        gutil.log("[webpack]", stats.toString(statsInfo));

        if(!bundleDoneCalled.docs){
            bundleDoneCalled.docs = true;
            done();
        }
    });
});

/****************************************************************
* Bundle Lib Tasks : bundle all lib js files into one
****************************************************************/
gulp.task("bundle:lib", function(done) {
    webpack(require("./webpack/lib.config"), function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);

        gutil.log("[webpack]", stats.toString(statsInfo));

        if(!bundleDoneCalled.lib){
            bundleDoneCalled.lib = true;
            done();
        }
    });
});

/****************************************************************
* Bundle Dist Tasks : bundle all dist js files into one
****************************************************************/
gulp.task("bundle:dist", function(done) {
    webpack(require("./webpack/dist.config"), function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);

        gutil.log("[webpack]", stats.toString(statsInfo));

        if(!bundleDoneCalled.lib){
            bundleDoneCalled.lib = true;
            done();
        }
    });
});

/****************************************************************
* DEVELOPMENT TASK
****************************************************************/
gulp.task("development", [
    "pug:docs:dev",
    "i18n:docs:dev",
    "bundle:docs:dev"
], function() {
    gulp.watch(gulpConfig.docs.src.html, ["pug:docs:dev"]);
    gulp.watch(gulpConfig.docs.src.assets, ["assets:docs"]);
    gulp.watch(gulpConfig.docs.src.i18n, ["i18n:docs:dev"]);
});

/****************************************************************
* PRODUCTION TASK
****************************************************************/
gulp.task("production", [
    // Generate lib
    "clean:lib",
    "bundle:lib",

    // Generate docs
    "pug:docs",
    "i18n:docs",
    "bundle:docs"
]);

/****************************************************************
* DOCS PRODUCTION TASK
****************************************************************/
gulp.task("docs", [
    "config",
    "clean:docs",
    "assets:docs",
    "pug:docs",
    "i18n:docs",
    "bundle:docs"
]);

/****************************************************************
* DEFAULT TASK : Choose task by NODE_ENV
****************************************************************/
gulp.task("default", [
    "config",
    "clean:docs",
    "assets:docs",
    process.env.NODE_ENV||"production"
]);
