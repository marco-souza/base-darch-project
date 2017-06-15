(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("darch/lib/utils/logger"), require("axios"), require("darch/lib/utils/storage"), require("qs"));
	else if(typeof define === 'function' && define.amd)
		define(["darch/lib/utils/logger", "axios", "darch/lib/utils/storage", "qs"], factory);
	else if(typeof exports === 'object')
		exports["darch"] = factory(require("darch/lib/utils/logger"), require("axios"), require("darch/lib/utils/storage"), require("qs"));
	else
		root["darch"] = factory(root["darch/lib/utils/logger"], root["axios"], root["darch/lib/utils/storage"], root["qs"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_28__, __WEBPACK_EXTERNAL_MODULE_30__, __WEBPACK_EXTERNAL_MODULE_31__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_28__;

/***/ }),

/***/ 30:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_30__;

/***/ }),

/***/ 31:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_31__;

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = __webpack_require__(28);

var _axios2 = _interopRequireDefault(_axios);

var _logger = __webpack_require__(11);

var _logger2 = _interopRequireDefault(_logger);

var _storage = __webpack_require__(30);

var _storage2 = _interopRequireDefault(_storage);

var _qs = __webpack_require__(31);

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _makeJsClassGreatAgain(_this, funcName, params) {
    return Object.getPrototypeOf(_this)[funcName].apply(_this, params);
}

var Logger = new _logger2.default("utils.http");

/**
 * Main class definition.
 */

var Http = function () {
    function Http() {
        var _this2 = this;

        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$baseUrl = _ref.baseUrl,
            baseUrl = _ref$baseUrl === undefined ? "" : _ref$baseUrl,
            _ref$shared = _ref.shared,
            shared = _ref$shared === undefined ? false : _ref$shared,
            _ref$authTokenKey = _ref.authTokenKey,
            authTokenKey = _ref$authTokenKey === undefined ? "@authToken" : _ref$authTokenKey,
            _ref$authHeaderKey = _ref.authHeaderKey,
            authHeaderKey = _ref$authHeaderKey === undefined ? "Authorization" : _ref$authHeaderKey,
            _ref$authHeaderValueP = _ref.authHeaderValueParser,
            authHeaderValueParser = _ref$authHeaderValueP === undefined ? function (token) {
            return "Bearer " + token;
        } : _ref$authHeaderValueP;

        _classCallCheck(this, Http);

        this.request = function () {
            for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
                rest[_key] = arguments[_key];
            }

            return _makeJsClassGreatAgain(_this2, 'request', rest);
        };

        this.setAuthToken = function () {
            for (var _len2 = arguments.length, rest = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                rest[_key2] = arguments[_key2];
            }

            return _makeJsClassGreatAgain(_this2, 'setAuthToken', rest);
        };

        this.getAuthToken = function () {
            for (var _len3 = arguments.length, rest = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                rest[_key3] = arguments[_key3];
            }

            return _makeJsClassGreatAgain(_this2, 'getAuthToken', rest);
        };

        if (shared) {
            Http.shared = this;
        }

        this.storage = new _storage2.default();
        this.baseUrl = baseUrl.replace(/^(.+)\/$/, "$1");
        this.authTokenKey = authTokenKey;
        this.authHeaderKey = authHeaderKey;
        this.authHeaderValueParser = authHeaderValueParser;
    }

    /****************************************************************
    * Instance methods
    ****************************************************************/


    _createClass(Http, [{
        key: "getAuthToken",
        value: function () {
            var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.storage.get(this.authTokenKey);

                            case 2:
                                return _context.abrupt("return", _context.sent);

                            case 3:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getAuthToken() {
                return _ref2.apply(this, arguments);
            }

            return getAuthToken;
        }()
    }, {
        key: "setAuthToken",
        value: function () {
            var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(token) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return this.storage.set(this.authTokenKey, token);

                            case 2:
                                return _context2.abrupt("return", _context2.sent);

                            case 3:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function setAuthToken(_x2) {
                return _ref3.apply(this, arguments);
            }

            return setAuthToken;
        }()
    }, {
        key: "request",
        value: function () {
            var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(method, url, data) {
                var _ref5 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
                    _ref5$headers = _ref5.headers,
                    headers = _ref5$headers === undefined ? {} : _ref5$headers;

                var logger, reqOpts, token;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                logger = Logger.create("request");

                                url = this.baseUrl + "/" + url.replace(/^\/(.+)$/, "$1");

                                logger.info("enter", {
                                    method: method,
                                    url: url,
                                    data: data
                                });

                                reqOpts = {
                                    url: url,
                                    headers: headers,
                                    method: method.toUpperCase(),
                                    paramsSerializer: function paramsSerializer(params) {
                                        return _qs2.default.stringify(params);
                                    }
                                };


                                if (data) {
                                    if (reqOpts.method == "GET") {
                                        reqOpts.params = data;
                                    } else {
                                        reqOpts.data = data;
                                    }
                                }

                                // Auth token
                                _context3.prev = 5;
                                _context3.next = 8;
                                return this.getAuthToken();

                            case 8:
                                token = _context3.sent;

                                reqOpts.headers[this.authHeaderKey] = this.authHeaderValueParser(token);

                                logger.debug("getAuthToken success", { token: token });
                                _context3.next = 16;
                                break;

                            case 13:
                                _context3.prev = 13;
                                _context3.t0 = _context3["catch"](5);

                                logger.error("getAuthToken error", _context3.t0);

                            case 16:
                                return _context3.abrupt("return", (0, _axios2.default)(reqOpts).then(function (response) {
                                    logger.debug("response", response);
                                    return response.data;
                                }));

                            case 17:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this, [[5, 13]]);
            }));

            function request(_x3, _x4, _x5) {
                return _ref4.apply(this, arguments);
            }

            return request;
        }()
    }]);

    return Http;
}();

exports.default = Http;
module.exports = exports["default"];

/***/ })

/******/ });
});