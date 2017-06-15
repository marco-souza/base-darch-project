import {LoggerFactory,Redux} from "darch/src/utils";
import i18n from "darch/src/i18n";

let Logger = new LoggerFactory("app.route");

module.exports = {
    path: "/",

    onEnter(nextState, replace, cb) {
        // Initialize i18n
        let logger = Logger.create("onEnter");
        logger.info("enter");

        let navigatorLang = 
            window.navigator.language||
            window.navigator.userLanguage||"";

        navigatorLang = navigatorLang.toLowerCase();

        var _initPromise = Promise.all([
            Redux.dispatch(i18n.actions.i18NInit(navigatorLang, {
                fallbackLang: "pt-br"
            }))
        ]);

        // Fire callback anyway
        _initPromise.then(function(result) {
            logger.info("all promises resolved", result);
            cb();
        }).catch(function() {cb();});
    },

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require("./page"));
        });
    },

    /*getChildRoutes(partialNextState, cb) {
        require.ensure([], (require) => {
            cb(null, [
                require("./home/route")
            ]);
        });
    },*/

    getIndexRoute(partialNextState, cb) {
        require.ensure([], (require) => {
            cb(null, require("./home/route"));
        });
    }
};
