import "babel-polyfill";
import config from "config";
import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {Router,browserHistory} from "react-router";
import {syncHistoryWithStore,routerReducer} from "react-router-redux";
import i18n from "darch/src/i18n";
import Toaster from "darch/src/toaster";
import {LoggerFactory,Redux} from "darch/src/utils";

let Logger = new LoggerFactory("main");

/****************************************************************
* App Bootstrap
****************************************************************/
(function() {
    let logger = Logger.create("bootstrap");
    logger.info("enter", config);

    // Create redux store with app reducers
    new Redux({
        routing: routerReducer,
        toaster: Toaster.reducer,
        i18n: i18n.reducer
    }, {shared: true});

    // Create an enhanced history that syncs navigation events with the store
    const history = syncHistoryWithStore(browserHistory, Redux.shared.store);

    const rootRoute = {
        childRoutes: [
            require("./app/route")
        ]
    };

    const routes = (
        <Provider store={Redux.shared.store}>
            <Router history={history} routes={rootRoute} />
        </Provider>
    );

    render(routes, document.getElementById("main-page"));
})();
