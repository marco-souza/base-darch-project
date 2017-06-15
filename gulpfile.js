let gulp                = require("gulp"),
    gutil               = require("gulp-util"),
    file                = require("gulp-file"),
    pug                 = require("gulp-pug"),
    yaml                = require("gulp-yaml"),
    htmlmin             = require("gulp-htmlmin"),
    jsonmin             = require("gulp-jsonmin"),
    del                 = require("del"),
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
gulp.task("clean:app", function() {
    return del.sync([
        gulpConfig.app.dest+"/assets",
        gulpConfig.app.dest+"/index.html",
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
gulp.task("assets:app", function() {
    return gulp.src(gulpConfig.app.src.assets)
    .pipe(gulp.dest(gulpConfig.app.dest+"/assets"));
});

/****************************************************************
* i18n Task : compile i18n yaml setups
****************************************************************/
gulp.task("i18n:app", function() {
    return gulp.src(gulpConfig.app.src.i18n)
    .pipe(yaml({space: 4}))
    .pipe(jsonmin())
    .pipe(gulp.dest(gulpConfig.app.dest+"/assets/i18n"));
});

gulp.task("i18n:app:dev", function() {
    return gulp.src(gulpConfig.app.src.i18n)
    .pipe(yaml({space: 4}))
    .pipe(gulp.dest(gulpConfig.app.dest+"/assets/i18n"));
});

/****************************************************************
* Pug Task : compile pug templates
****************************************************************/
gulp.task("pug:app", function() {
    return gulp.src(gulpConfig.app.src.html)
    .pipe(pug({
        locals: config.webinfo
    }))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(gulpConfig.app.dest));
});

gulp.task("pug:app:dev", function() {
    return gulp.src(gulpConfig.app.src.html)
    .pipe(pug({
        locals: config.webinfo
    }))
    .pipe(gulp.dest(gulpConfig.app.dest));
});

/****************************************************************
* Bundle App Tasks : bundle all  js files into one
****************************************************************/
gulp.task("bundle:app", function(done) {
    webpack(require("./webpack/prod.config"), function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);

        gutil.log("[webpack]", stats.toString(statsInfo));

        if(!bundleDoneCalled.app){
            bundleDoneCalled.app = true;
            done();
        }
    });
});

gulp.task("bundle:app:dev", function(done) {
    webpack(require("./webpack/dev.config"), function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);

        gutil.log("[webpack]", stats.toString(statsInfo));

        if(!bundleDoneCalled.app){
            bundleDoneCalled.app = true;
            done();
        }
    });
});


/****************************************************************
* DEVELOPMENT TASK
****************************************************************/
gulp.task("development", [
    "pug:app:dev",
    "i18n:app:dev",
    "bundle:app:dev"
], function() {
    gulp.watch(gulpConfig.app.src.html, ["pug:app:dev"]);
    gulp.watch(gulpConfig.app.src.assets, ["assets:app"]);
    gulp.watch(gulpConfig.app.src.i18n, ["i18n:app:dev"]);
});

/****************************************************************
* PRODUCTION TASK
****************************************************************/
gulp.task("production", [
    "pug:app",
    "i18n:app",
    "bundle:app"
]);

/****************************************************************
* DEFAULT TASK : Choose task by NODE_ENV
****************************************************************/
gulp.task("default", [
    "config",
    "clean:app",
    "assets:app",
    process.env.NODE_ENV||"production"
]);
