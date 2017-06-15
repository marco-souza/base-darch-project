webpackJsonp([2],{1218:function(e,r,t){"use strict";function n(e){if(Array.isArray(e)){for(var r=0,t=Array(e.length);r<e.length;r++)t[r]=e[r];return t}return Array.from(e)}function o(e){return function(){return function(r){return function(t){if(t.type!==u.CALL_HISTORY_METHOD)return r(t);var o=t.payload,a=o.method,i=o.args;e[a].apply(e,n(i))}}}}Object.defineProperty(r,"__esModule",{value:!0}),r.default=o;var u=t(687)},1219:function(e,r,t){"use strict";function n(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=t.selectLocationState,i=void 0===n?a:n,c=t.adjustUrlOnReplay,s=void 0===c||c;if(void 0===i(r.getState()))throw new Error("Expected the routing state to be available either as `state.routing` or as the custom expression you can specify as `selectLocationState` in the `syncHistoryWithStore()` options. Ensure you have added the `routerReducer` to your store's reducers via `combineReducers` or whatever method you use to isolate your reducers.");var d=void 0,l=void 0,f=void 0,g=void 0,p=void 0,v=function(e){return i(r.getState()).locationBeforeTransitions||(e?d:void 0)};if(d=v(),s){var y=function(){var r=v(!0);p!==r&&d!==r&&(l=!0,p=r,e.transitionTo(o({},r,{action:"PUSH"})),l=!1)};f=r.subscribe(y),y()}var h=function(e){l||(p=e,!d&&(d=e,v())||r.dispatch({type:u.LOCATION_CHANGE,payload:e}))};return g=e.listen(h),e.getCurrentLocation&&h(e.getCurrentLocation()),o({},e,{listen:function(t){var n=v(!0),o=!1,u=r.subscribe(function(){var e=v(!0);e!==n&&(n=e,o||t(n))});return e.getCurrentLocation||t(n),function(){o=!0,u()}},unsubscribe:function(){s&&f(),g()}})}Object.defineProperty(r,"__esModule",{value:!0});var o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e};r.default=n;var u=t(688),a=function(e){return e.routing}},1326:function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t(145);var o=t(144),u=n(o),a=t(2),i=n(a),c=t(65),s=t(57),d=t(143),l=t(718),f=t(28),g=n(f),p=t(149),v=n(p),y=t(3),h=new y.LoggerFactory("main");!function(){h.create("bootstrap").info("enter",u.default),new y.Redux({routing:l.routerReducer,toaster:v.default.reducer,i18n:g.default.reducer},{shared:!0});var e=(0,l.syncHistoryWithStore)(d.browserHistory,y.Redux.shared.store),r={childRoutes:[t(716)]},n=i.default.createElement(s.Provider,{store:y.Redux.shared.store},i.default.createElement(d.Router,{history:e,routes:r}));(0,c.render)(n,document.getElementById("main-page"))}()},687:function(e,r,t){"use strict";function n(e){return function(){for(var r=arguments.length,t=Array(r),n=0;n<r;n++)t[n]=arguments[n];return{type:o,payload:{method:e,args:t}}}}Object.defineProperty(r,"__esModule",{value:!0});var o=r.CALL_HISTORY_METHOD="@@router/CALL_HISTORY_METHOD",u=r.push=n("push"),a=r.replace=n("replace"),i=r.go=n("go"),c=r.goBack=n("goBack"),s=r.goForward=n("goForward");r.routerActions={push:u,replace:a,go:i,goBack:c,goForward:s}},688:function(e,r,t){"use strict";function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=r.type,n=r.payload;return t===u?o({},e,{locationBeforeTransitions:n}):e}Object.defineProperty(r,"__esModule",{value:!0});var o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e};r.routerReducer=n;var u=r.LOCATION_CHANGE="@@router/LOCATION_CHANGE",a={locationBeforeTransitions:null}},716:function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=t(3),u=t(28),a=n(u),i=new o.LoggerFactory("app.route");e.exports={path:"/",onEnter:function(e,r,t){var n=i.create("onEnter");n.info("enter");var u=window.navigator.language||window.navigator.userLanguage||"";u=u.toLowerCase(),Promise.all([o.Redux.dispatch(a.default.actions.i18NInit(u,{fallbackLang:"pt-br"}))]).then(function(e){n.info("all promises resolved",e),t()}).catch(function(){t()})},getComponent:function(e,r){t.e(0).then(function(e){r(null,t(1329))}.bind(null,t)).catch(t.oe)},getIndexRoute:function(e,r){t.e(1).then(function(e){r(null,t(1328))}.bind(null,t)).catch(t.oe)}}},718:function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(r,"__esModule",{value:!0}),r.routerMiddleware=r.routerActions=r.goForward=r.goBack=r.go=r.replace=r.push=r.CALL_HISTORY_METHOD=r.routerReducer=r.LOCATION_CHANGE=r.syncHistoryWithStore=void 0;var o=t(688);Object.defineProperty(r,"LOCATION_CHANGE",{enumerable:!0,get:function(){return o.LOCATION_CHANGE}}),Object.defineProperty(r,"routerReducer",{enumerable:!0,get:function(){return o.routerReducer}});var u=t(687);Object.defineProperty(r,"CALL_HISTORY_METHOD",{enumerable:!0,get:function(){return u.CALL_HISTORY_METHOD}}),Object.defineProperty(r,"push",{enumerable:!0,get:function(){return u.push}}),Object.defineProperty(r,"replace",{enumerable:!0,get:function(){return u.replace}}),Object.defineProperty(r,"go",{enumerable:!0,get:function(){return u.go}}),Object.defineProperty(r,"goBack",{enumerable:!0,get:function(){return u.goBack}}),Object.defineProperty(r,"goForward",{enumerable:!0,get:function(){return u.goForward}}),Object.defineProperty(r,"routerActions",{enumerable:!0,get:function(){return u.routerActions}});var a=t(1219),i=n(a),c=t(1218),s=n(c);r.syncHistoryWithStore=i.default,r.routerMiddleware=s.default}},[1326]);