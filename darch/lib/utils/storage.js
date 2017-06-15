(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["darch"] = factory();
	else
		root["darch"] = factory();
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ({

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _makeJsClassGreatAgain(_this, funcName, params) {
    return Object.getPrototypeOf(_this)[funcName].apply(_this, params);
}

var Storage = function () {
    function Storage() {
        var _this2 = this;

        _classCallCheck(this, Storage);

        this.clear = function () {
            for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
                rest[_key] = arguments[_key];
            }

            return _makeJsClassGreatAgain(_this2, 'clear', rest);
        };

        this.remove = function () {
            for (var _len2 = arguments.length, rest = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                rest[_key2] = arguments[_key2];
            }

            return _makeJsClassGreatAgain(_this2, 'remove', rest);
        };

        this.get = function () {
            for (var _len3 = arguments.length, rest = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                rest[_key3] = arguments[_key3];
            }

            return _makeJsClassGreatAgain(_this2, 'get', rest);
        };

        this.set = function () {
            for (var _len4 = arguments.length, rest = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                rest[_key4] = arguments[_key4];
            }

            return _makeJsClassGreatAgain(_this2, 'set', rest);
        };

        var storageTypes = ["localStorage", "sessionStorage"];

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = storageTypes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var storageType = _step.value;

                if (window[storageType]) {
                    this.storageType = storageType;
                    this.storage = window[storageType];
                    break;
                }
            }

            // Fallback to in memory storage.
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        if (!this.storage) {
            this.storageType = "memory";
            this.storage = {};
        }
    }

    _createClass(Storage, [{
        key: "set",
        value: function set(key, value) {
            var _this3 = this;

            return new Promise(function (resolve) {
                switch (_this3.storageType) {
                    case "localStorage":
                    case "sessionStorage":
                        return resolve(_this3.storage.setItem(key, value));
                    default:
                        _this3.storage[key] = value;
                        resolve(value);
                }
            });
        }
    }, {
        key: "get",
        value: function get(key) {
            var _this4 = this;

            return new Promise(function (resolve) {
                switch (_this4.storageType) {
                    case "localStorage":
                    case "sessionStorage":
                        return resolve(_this4.storage.getItem(key));
                    default:
                        resolve(_this4.storage[key]);
                }
            });
        }
    }, {
        key: "remove",
        value: function remove(key) {
            var _this5 = this;

            return new Promise(function (resolve) {
                switch (_this5.storageType) {
                    case "localStorage":
                    case "sessionStorage":
                        return resolve(_this5.storage.removeItem(key));
                    default:
                }
            });
        }
    }, {
        key: "clear",
        value: function clear() {
            var _this6 = this;

            return new Promise(function (resolve) {
                switch (_this6.storageType) {
                    case "localStorage":
                    case "sessionStorage":
                        return resolve(_this6.storage.clear());
                    default:
                        _this6.storage = {};
                        resolve();
                }
            });
        }
    }]);

    return Storage;
}();

exports.default = Storage;
module.exports = exports["default"];

/***/ })

/******/ });
});