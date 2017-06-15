(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("darch/lib/utils"), require("react"), require("lodash"), require("react-redux"), require("darch/lib/utils/logger"), require("redux-actions"), require("moment"), require("hogan.js"));
	else if(typeof define === 'function' && define.amd)
		define(["darch/lib/utils", "react", "lodash", "react-redux", "darch/lib/utils/logger", "redux-actions", "moment", "hogan.js"], factory);
	else if(typeof exports === 'object')
		exports["darch"] = factory(require("darch/lib/utils"), require("react"), require("lodash"), require("react-redux"), require("darch/lib/utils/logger"), require("redux-actions"), require("moment"), require("hogan.js"));
	else
		root["darch"] = factory(root["darch/lib/utils"], root["react"], root["lodash"], root["react-redux"], root["darch/lib/utils/logger"], root["redux-actions"], root["moment"], root["hogan.js"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_425__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 342);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(4);

var _lodash2 = _interopRequireDefault(_lodash);

var _hogan = __webpack_require__(425);

var _hogan2 = _interopRequireDefault(_hogan);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _makeJsClassGreatAgain(_this, funcName, params) {
    return Object.getPrototypeOf(_this)[funcName].apply(_this, params);
}

var Logger = new _utils.LoggerFactory("i18n.utils", { level: "debug" });

var Utils = function () {
    function Utils() {
        var _this2 = this;

        _classCallCheck(this, Utils);

        this.translate = function () {
            for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
                rest[_key] = arguments[_key];
            }

            return _makeJsClassGreatAgain(_this2, 'translate', rest);
        };
    }

    _createClass(Utils, null, [{
        key: "translate",
        value: function translate() {
            var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref$spec = _ref.spec,
                spec = _ref$spec === undefined ? {} : _ref$spec,
                _ref$text = _ref.text,
                text = _ref$text === undefined ? "" : _ref$text,
                _ref$data = _ref.data,
                data = _ref$data === undefined ? {} : _ref$data,
                _ref$parse = _ref.parse,
                parse = _ref$parse === undefined ? function (t) {
                return t;
            } : _ref$parse,
                _ref$format = _ref.format,
                format = _ref$format === undefined ? null : _ref$format;

            var logger = Logger.create("translate");
            logger.info("enter", { text: text, data: data, spec: spec });

            var translation = (_lodash2.default.get(spec, "dictionary") || {})[text] || text;
            logger.debug("translation 1", { translation: translation });

            translation = _hogan2.default.compile(translation).render(data);
            logger.debug("translation 2", { translation: translation });

            translation = parse(translation);
            logger.debug("translation 3", { translation: translation });

            logger.debug("parsed translation", { translation: translation });

            switch (format) {
                case "lower":
                    translation = _lodash2.default.lowerCase(translation);
                    break;
                case "upper":
                    translation = _lodash2.default.upperCase(translation);
                    break;
                case "capital":
                    translation = _lodash2.default.capitalize(translation);
                    break;
                case "camel":
                    translation = _lodash2.default.camelCase(translation);
                    break;
                default:
            }

            logger.info("leave", { translation: translation });

            return translation;
        }
    }]);

    return Utils;
}();

exports.default = Utils;
module.exports = exports["default"];

/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reduxActions = __webpack_require__(14);

var _utils = __webpack_require__(0);

var Logger = new _utils.LoggerFactory("i18n.actions", { level: "error" });
var http = new _utils.Http();

exports.default = (0, _reduxActions.createActions)({
    i18NInit: function i18NInit() {
        var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "pt-br";

        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref$fallbackLang = _ref.fallbackLang,
            fallbackLang = _ref$fallbackLang === undefined ? "pt-br" : _ref$fallbackLang,
            _ref$path = _ref.path,
            path = _ref$path === undefined ? "/assets/i18n" : _ref$path;

        var logger = Logger.create("init");
        logger.info("enter", { lang: lang, fallbackLang: fallbackLang });

        return http.request("GET", path + "/" + lang + ".json").catch(function () {
            // Something went wrong : fetch fallback lang file.
            return http.request("GET", path + "/" + fallbackLang + ".json");
        });
    }
});
module.exports = exports["default"];

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(8);

var _lodash = __webpack_require__(4);

var _lodash2 = _interopRequireDefault(_lodash);

var _moment = __webpack_require__(15);

var _moment2 = _interopRequireDefault(_moment);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _makeJsClassGreatAgain(_this, funcName, params) {
    return Object.getPrototypeOf(_this)[funcName].apply(_this, params);
}

var Logger = new _utils.LoggerFactory("i18n.moment", { level: "debug" });

/**
 * Redux map state to props function.
 *
 * @param {object} state
 * @param {object} ownProps
 */
function mapStateToProps(state) {
    return {
        spec: state.i18n.spec
    };
}

/**
 * Redux dispatch to props map.
 */
var mapDispatchToProps = {};

/**
 * Main component class.
 */

var Component = function (_React$Component) {
    _inherits(Component, _React$Component);

    function Component() {
        var _ref;

        var _temp, _temp2, _temp3, _this2, _ret;

        _classCallCheck(this, Component);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp3 = (_temp2 = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Component.__proto__ || Object.getPrototypeOf(Component)).call.apply(_ref, [this].concat(args))), _this2), _this2.componentDidMount = function () {
            for (var _len2 = arguments.length, rest = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                rest[_key2] = arguments[_key2];
            }

            return _makeJsClassGreatAgain(_this2, 'componentDidMount', rest);
        }, _temp), _this2.format = function () {
            for (var _len3 = arguments.length, rest = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                rest[_key3] = arguments[_key3];
            }

            return _makeJsClassGreatAgain(_this2, 'format', rest);
        }, _temp2), _this2.render = function () {
            for (var _len4 = arguments.length, rest = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                rest[_key4] = arguments[_key4];
            }

            return _makeJsClassGreatAgain(_this2, 'render', rest);
        }, _temp3), _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(Component, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var logger = Logger.create("componentDidMount");
            logger.info("enter", { props: this.props });
        }
        /** React properties **/

    }, {
        key: "format",
        value: function format() {
            var logger = Logger.create("format");
            logger.info("enter", { props: this.props });

            var spec = _lodash2.default.get(this.props, "spec");
            var _props = this.props,
                date = _props.date,
                formatter = _props.formatter;


            var momentDate = (0, _moment2.default)(date);

            if (momentDate.isValid()) {
                if (_lodash2.default.isString(formatter)) {
                    var format = _lodash2.default.get(spec.formats, formatter);

                    if (format) {
                        date = momentDate.format(format);
                    } else {
                        date = momentDate.format(formatter);
                    }
                } else if (_lodash2.default.isFunction(formatter)) {
                    date = formatter(date);
                }
            }

            logger.debug("formatted date", { date: date });

            return date;
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "span",
                { className: this.props.className,
                    style: this.props.style },
                this.format()
            );
        }
    }]);

    return Component;
}(_react2.default.Component);

/** Export **/


Component.displayName = "i18n.moment";
Component.defaultProps = {
    formatter: "datetime"
};
Component.propTypes = {
    opts: _react2.default.PropTypes.object,
    date: _react2.default.PropTypes.string.isRequired,
    formatter: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.func])
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Component);
module.exports = exports["default"];

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reduxActions = __webpack_require__(14);

var _logger = __webpack_require__(11);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Logger = new _logger2.default("i18n.reducer", { level: "debug" });

var initialState = {
    spec: { dictionary: {} }
};

exports.default = (0, _reduxActions.handleActions)({
    i18NInit_COMPLETED: function i18NInit_COMPLETED(state, action) {
        var logger = Logger.create("I18N_INIT_COMPLETED");
        logger.info("enter", { state: state, action: action });

        return { spec: action.payload };
    }
}, initialState);
module.exports = exports["default"];

/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(8);

var _lodash = __webpack_require__(4);

var _lodash2 = _interopRequireDefault(_lodash);

var _utils = __webpack_require__(0);

var _utils2 = __webpack_require__(25);

var _utils3 = _interopRequireDefault(_utils2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _makeJsClassGreatAgain(_this, funcName, params) {
    return Object.getPrototypeOf(_this)[funcName].apply(_this, params);
}

var Logger = new _utils.LoggerFactory("i18n.translate", { level: "debug" });

/**
 * Redux map state to props function.
 *
 * @param {object} state
 * @param {object} ownProps
 */
function mapStateToProps(state) {
    return {
        spec: state.i18n.spec
    };
}

/**
 * Redux dispatch to props map.
 */
var mapDispatchToProps = {};

/**
 * Main component class.
 */

var Component = function (_React$Component) {
    _inherits(Component, _React$Component);

    function Component() {
        var _ref;

        var _temp, _temp2, _temp3, _this2, _ret;

        _classCallCheck(this, Component);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp3 = (_temp2 = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Component.__proto__ || Object.getPrototypeOf(Component)).call.apply(_ref, [this].concat(args))), _this2), _this2.componentDidMount = function () {
            for (var _len2 = arguments.length, rest = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                rest[_key2] = arguments[_key2];
            }

            return _makeJsClassGreatAgain(_this2, 'componentDidMount', rest);
        }, _temp), _this2.translate = function () {
            for (var _len3 = arguments.length, rest = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                rest[_key3] = arguments[_key3];
            }

            return _makeJsClassGreatAgain(_this2, 'translate', rest);
        }, _temp2), _this2.render = function () {
            for (var _len4 = arguments.length, rest = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                rest[_key4] = arguments[_key4];
            }

            return _makeJsClassGreatAgain(_this2, 'render', rest);
        }, _temp3), _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(Component, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var logger = Logger.create("componentDidMount");
            logger.info("enter", { props: this.props });
        }
        /** React properties **/

    }, {
        key: "translate",
        value: function translate() {
            var logger = Logger.create("translate");
            logger.info("enter", { props: this.props });

            var spec = _lodash2.default.get(this.props, "spec");
            var _props = this.props,
                text = _props.text,
                data = _props.data,
                parse = _props.parse;


            return _utils3.default.translate({ spec: spec, text: text, data: data, parse: parse });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement("span", { className: this.props.className,
                style: this.props.style,
                dangerouslySetInnerHTML: {
                    __html: this.translate()
                } });
        }
    }]);

    return Component;
}(_react2.default.Component);

/** Export **/


Component.displayName = "i18n.translate";
Component.defaultProps = {
    opts: {},
    parse: function parse(translation) {
        return translation;
    }
};
Component.propTypes = {
    opts: _react2.default.PropTypes.object,
    text: _react2.default.PropTypes.string.isRequired,
    data: _react2.default.PropTypes.object,
    parse: _react2.default.PropTypes.func
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Component);
module.exports = exports["default"];

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _makeJsClassGreatAgain(_this, funcName, params) {
    return Object.getPrototypeOf(_this)[funcName].apply(_this, params);
}

var i18n = function i18n() {
    _classCallCheck(this, i18n);
};

i18n.Translate = __webpack_require__(306);
i18n.Moment = __webpack_require__(304);
i18n.actions = __webpack_require__(303);
i18n.reducer = __webpack_require__(305);
i18n.utils = __webpack_require__(25);
exports.default = i18n;
module.exports = exports["default"];

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),

/***/ 425:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_425__;

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ })

/******/ });
});