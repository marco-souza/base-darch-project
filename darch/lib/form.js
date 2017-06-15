(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("darch/lib/utils"), require("react"), require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["darch/lib/utils", "react", "lodash"], factory);
	else if(typeof exports === 'object')
		exports["darch"] = factory(require("darch/lib/utils"), require("react"), require("lodash"));
	else
		root["darch"] = factory(root["darch/lib/utils"], root["react"], root["lodash"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_4__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 340);
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

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Validators = undefined;
exports.validate = validate;

var _lodash = __webpack_require__(4);

var _lodash2 = _interopRequireDefault(_lodash);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Logger = new _utils.LoggerFactory("validators", { level: "error" });
var emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

var Validators = exports.Validators = {
    $required: {
        validate: function validate(value) {
            var logger = Logger.create("required");
            logger.info("enter", { value: value });

            return !_lodash2.default.isEmpty(value);
        }
    },

    $email: {
        validate: function validate(value) {
            var logger = Logger.create("email");
            logger.info("enter", { value: value });

            if (!value) {
                return true;
            }
            return emailRegex.test(value);
        }
    },

    $alphanumeric: {
        validate: function validate(value) {
            var logger = Logger.create("alphanumeric");
            logger.info("enter", { value: value });

            return (/^[a-zA-Z0-9]*$/.test(value)
            );
        }
    },

    $digits: {
        validate: function validate(value) {
            var logger = Logger.create("digits");
            logger.info("enter", { value: value });

            return (/^[0-9]*$/.test(value)
            );
        }
    },

    $lowercase: {
        validate: function validate(value) {
            var logger = Logger.create("lowercase");
            logger.info("enter", { value: value });

            return (/^[a-z0-9]*$/.test(value)
            );
        }
    },

    $uppercase: {
        validate: function validate(value) {
            var logger = Logger.create("uppercase");
            logger.info("enter", { value: value });

            return (/^[A-Z0-9]*$/.test(value)
            );
        }
    },

    $domain: {
        validate: function validate(value) {
            var logger = Logger.create("domain");
            logger.info("enter", { value: value });

            return (/^[a-zA-Z0-9_]+$/.test(value)
            );
        }
    },

    $equal: {
        watch: [0], // opts indexes of watch field names
        validate: function validate(value) {
            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

            var logger = Logger.create("equal");
            logger.info("enter", { value: value, opts: opts, context: context });

            var values = context.values || {};

            if (opts.length && !_lodash2.default.isEqual(value, values[opts[0]])) {
                return false;
            }

            return true;
        }
    }
};

function validate(name, value, opts, context) {
    var logger = Logger.create("validate");
    logger.info("enter", { name: name, value: value, opts: opts });

    if (Validators[name]) {
        return Promise.resolve(Validators[name].validate(value, opts, context));
    }

    return Promise.resolve(true);
}

/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (field, values) {
    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var logger = Logger.create("validate");
    logger.info("enter", {
        name: field.props.name,
        validators: field.props.validators,
        values: values
    });

    if (_lodash2.default.isString(field.props.validators)) {
        return validateFromString(field, values, opts);
    } else if (_lodash2.default.isArray(field.props.validators)) {
        return validateFromArray(field, values, opts);
    }

    return Promise.resolve({});
};

var _lodash = __webpack_require__(4);

var _lodash2 = _interopRequireDefault(_lodash);

var _utils = __webpack_require__(0);

var _validators = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Logger = new _utils.LoggerFactory("form.validate", { level: "error" });

function evalObjectValidator(validator, field, values, opts) {
    var logger = Logger.create("evalObjectValidator");
    logger.info("enter", { validator: validator, values: values, opts: opts });

    var context = { values: values };
    var name = validator.name,
        on = validator.on;

    var promise = void 0;

    on = on ? _lodash2.default.flatten([on]) : null;

    logger.debug("name", { name: name });

    // Use own validator on event to perform
    // validation or inherits from form validateOn.
    if (opts.event && on && on.indexOf(opts.event) < 0 || opts.event && !on && opts.validateOn != opts.event) {
        logger.info("NOT THE TEMPLE", { name: name });

        promise = Promise.resolve({
            name: name,
            valid: field.state.isValidMap[name]
        });
    } else {
        logger.info("IS THE TEMPLE", { name: name });

        promise = Promise.resolve(validator.validate(field.state.value, context)).then(function (valid) {
            logger.debug("validator " + name + " result", { valid: valid });
            return { name: name, valid: valid };
        }).catch(function (error) {
            logger.error("validator error", error);
            return { name: name, valid: false };
        });
    }

    return promise;
}

function evalStringValidator(validator, field, values, opts) {
    var logger = Logger.create("evalStringValidator");
    logger.info("enter", { validator: validator });

    var vopts = validator.split(":");
    var name = vopts.shift();
    var promise = void 0;
    var context = { values: values };

    logger.debug("validator is string", { validator: validator, name: name, vopts: vopts });

    if (opts.event && opts.validateOn && opts.validateOn != opts.event) {
        promise = Promise.resolve({
            name: name,
            valid: field.state.isValidMap[name]
        });
    } else {
        promise = (0, _validators.validate)(name, field.state.value, vopts, context).then(function (valid) {
            logger.debug("validator " + name, { valid: valid });
            return { name: name, valid: valid };
        }).catch(function (error) {
            logger.error("validator error", error);
            return { name: name, valid: false };
        });
    }

    return promise;
}

/**
 * This function validates a field where validators is an array
 * os strings or objects.
 */
function validateFromArray(field, values, opts) {
    var logger = Logger.create("validateFromArray");

    logger.info("enter", {
        name: field.props.name,
        validators: field.props.validators,
        values: values,
        event: opts.event,
        validateOn: opts.validateOn
    });

    var promises = [];

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = field.props.validators[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var validator = _step.value;

            if (_lodash2.default.isString(validator)) {
                promises.push(evalStringValidator(validator, field, values, opts));
            } else if (_lodash2.default.isObject(validator)) {
                var name = validator.name;


                if (!_lodash2.default.isFunction(validator.validate) || _lodash2.default.isEmpty(name)) {
                    continue;
                }

                promises.push(evalObjectValidator(validator, field, values, opts));
            }
        }
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

    return Promise.all(promises).then(function (results) {
        var map = _lodash2.default.reduce(results, function (map, result) {
            logger.debug("isValidMap : reduce", { map: map, result: result });

            map[result.name] = result.valid;
            return map;
        }, {});

        logger.debug("isValidMap", { results: results, map: map });

        return map;
    });
}

/**
 * This function validates a field where validators props is
 * a string in the form: "VALIDATOR_1:OPTS|...|VALIDATOR_n:OPTS"
 */
function validateFromString(field, values, opts) {
    var logger = Logger.create("validateFromString");

    logger.info("enter", {
        name: field.props.name,
        validators: field.props.validators,
        values: values,
        event: opts.event,
        validateOn: opts.validateOn
    });

    // Validate if and only if the current event name is the
    // same as form validateOn event name.
    if (opts.event && opts.validateOn && opts.validateOn != opts.event) {
        return Promise.resolve(field.state.isValidMap);
    }

    var validators = field.props.validators.split("|");
    var promises = [];

    _lodash2.default.forEach(validators, function (validator, idx) {
        logger.debug("validator " + idx, { validator: validator });

        promises.push(evalStringValidator(validator, field, values, opts));
    });

    return Promise.all(promises).then(function (results) {
        var map = _lodash2.default.reduce(results, function (map, result) {
            logger.debug("isValidMap : reduce", { map: map, result: result });

            map[result.name] = result.valid;
            return map;
        }, {});

        logger.debug("isValidMap", { results: results, map: map });

        return map;
    });
}

module.exports = exports["default"];

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (field) {
    var fieldWatchers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var watchingFields = [];
    var validators = field.props.validators;

    if (_lodash2.default.isString(validators)) {
        validators = validators.split("|");

        // Process field validators that require watch
        // other fields.
        var _iteratorNormalCompletion5 = true;
        var _didIteratorError5 = false;
        var _iteratorError5 = undefined;

        try {
            for (var _iterator5 = validators[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var validator = _step5.value;

                processStringValidator(validator, field, fieldWatchers, watchingFields);
            }
        } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion5 && _iterator5.return) {
                    _iterator5.return();
                }
            } finally {
                if (_didIteratorError5) {
                    throw _iteratorError5;
                }
            }
        }
    } else if (_lodash2.default.isArray(validators)) {
        var _iteratorNormalCompletion6 = true;
        var _didIteratorError6 = false;
        var _iteratorError6 = undefined;

        try {
            for (var _iterator6 = validators[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                var _validator = _step6.value;

                if (_lodash2.default.isString(_validator)) {
                    processStringValidator(_validator, field, fieldWatchers, watchingFields);
                } else if (_lodash2.default.isObject(_validator)) {
                    processObjectValidator(_validator, field, fieldWatchers, watchingFields);
                }
            }
        } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion6 && _iterator6.return) {
                    _iterator6.return();
                }
            } finally {
                if (_didIteratorError6) {
                    throw _iteratorError6;
                }
            }
        }
    }

    field.watchingFields = watchingFields;
};

var _lodash = __webpack_require__(4);

var _lodash2 = _interopRequireDefault(_lodash);

var _validators = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function processObjectValidator(validator, field) {
    var fieldWatchers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var watchingFields = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

    if (!validator.watch) {
        return;
    }

    var validatorWatch = _lodash2.default.flatten([validator.watch]);
    var watchedFieldNames = [];

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = validatorWatch[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var watch = _step.value;

            if (_lodash2.default.isString(watch)) {
                watchedFieldNames.push(watch);
            }
        }
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

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = watchedFieldNames[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var fieldName = _step2.value;

            fieldWatchers[fieldName] = fieldWatchers[fieldName] || [];
            fieldWatchers[fieldName].push(field.props.name);
            watchingFields.push(fieldName);
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
}

function processStringValidator(validator, field) {
    var fieldWatchers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var watchingFields = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

    var opts = validator.split(":");
    var validatorName = opts.shift();
    var watchedFieldNames = [];
    var validatorWatch = _lodash2.default.get(_validators.Validators, validatorName + ".watch");

    if (!_lodash2.default.isUndefined(validatorWatch)) {
        validatorWatch = _lodash2.default.flatten([validatorWatch]);

        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
            for (var _iterator3 = validatorWatch[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var watch = _step3.value;

                // If watch is number, then it represents the index
                // of opts that contains the watched field name.
                if (_lodash2.default.isNumber(watch)) {
                    if (watch >= 0 && watch < opts.length) {
                        watchedFieldNames.push(opts[watch]);
                    }
                }
                // If watch is string, then it is the watched field
                // name.
                else if (_lodash2.default.isString(watch)) {
                        watchedFieldNames.push(watch);
                    }
            }
        } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                    _iterator3.return();
                }
            } finally {
                if (_didIteratorError3) {
                    throw _iteratorError3;
                }
            }
        }
    }

    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
        for (var _iterator4 = watchedFieldNames[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var fieldName = _step4.value;

            fieldWatchers[fieldName] = fieldWatchers[fieldName] || [];
            fieldWatchers[fieldName].push(field.props.name);
            watchingFields.push(fieldName);
        }
    } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                _iterator4.return();
            }
        } finally {
            if (_didIteratorError4) {
                throw _iteratorError4;
            }
        }
    }
}

module.exports = exports["default"];

/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(4);

var _lodash2 = _interopRequireDefault(_lodash);

var _utils = __webpack_require__(0);

var _validate = __webpack_require__(300);

var _validate2 = _interopRequireDefault(_validate);

var _validators = __webpack_require__(16);

var _watch = __webpack_require__(301);

var _watch2 = _interopRequireDefault(_watch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _makeJsClassGreatAgain(_this, funcName, params) {
    return Object.getPrototypeOf(_this)[funcName].apply(_this, params);
}

var Logger = new _utils.LoggerFactory("form", { level: "error" });

/**
 * Main component class.
 */

var Component = function (_React$Component) {
    _inherits(Component, _React$Component);

    _createClass(Component, null, [{
        key: "registerValidator",


        /**
         * This function register a new validator.
         */
        value: function registerValidator(validator) {
            if (!validator || !validator.name) {
                return;
            }

            _validators.Validators[validator.name] = validator;
        }

        /** Nested components **/

        /**
         * Class instance constructor.
         */

        /** React properties **/

    }]);

    function Component(props) {
        _classCallCheck(this, Component);

        // Instance properties
        var _this2 = _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this, props));

        _this2.render = function () {
            for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
                rest[_key] = arguments[_key];
            }

            return _makeJsClassGreatAgain(_this2, 'render', rest);
        };

        _this2.onSubmit = function () {
            for (var _len2 = arguments.length, rest = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                rest[_key2] = arguments[_key2];
            }

            return _makeJsClassGreatAgain(_this2, 'onSubmit', rest);
        };

        _this2.onFieldFocus = function () {
            for (var _len3 = arguments.length, rest = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                rest[_key3] = arguments[_key3];
            }

            return _makeJsClassGreatAgain(_this2, 'onFieldFocus', rest);
        };

        _this2.onFieldBlur = function () {
            for (var _len4 = arguments.length, rest = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                rest[_key4] = arguments[_key4];
            }

            return _makeJsClassGreatAgain(_this2, 'onFieldBlur', rest);
        };

        _this2.onFieldChange = function () {
            for (var _len5 = arguments.length, rest = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                rest[_key5] = arguments[_key5];
            }

            return _makeJsClassGreatAgain(_this2, 'onFieldChange', rest);
        };

        _this2.updateFieldErrors = function () {
            for (var _len6 = arguments.length, rest = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
                rest[_key6] = arguments[_key6];
            }

            return _makeJsClassGreatAgain(_this2, 'updateFieldErrors', rest);
        };

        _this2.validateForm = function () {
            for (var _len7 = arguments.length, rest = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
                rest[_key7] = arguments[_key7];
            }

            return _makeJsClassGreatAgain(_this2, 'validateForm', rest);
        };

        _this2.validateField = function () {
            for (var _len8 = arguments.length, rest = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
                rest[_key8] = arguments[_key8];
            }

            return _makeJsClassGreatAgain(_this2, 'validateField', rest);
        };

        _this2.removeFieldError = function () {
            for (var _len9 = arguments.length, rest = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
                rest[_key9] = arguments[_key9];
            }

            return _makeJsClassGreatAgain(_this2, 'removeFieldError', rest);
        };

        _this2.addFieldError = function () {
            for (var _len10 = arguments.length, rest = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
                rest[_key10] = arguments[_key10];
            }

            return _makeJsClassGreatAgain(_this2, 'addFieldError', rest);
        };

        _this2.removeField = function () {
            for (var _len11 = arguments.length, rest = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
                rest[_key11] = arguments[_key11];
            }

            return _makeJsClassGreatAgain(_this2, 'removeField', rest);
        };

        _this2.addField = function () {
            for (var _len12 = arguments.length, rest = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
                rest[_key12] = arguments[_key12];
            }

            return _makeJsClassGreatAgain(_this2, 'addField', rest);
        };

        _this2.processChildren = function () {
            for (var _len13 = arguments.length, rest = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
                rest[_key13] = arguments[_key13];
            }

            return _makeJsClassGreatAgain(_this2, 'processChildren', rest);
        };

        _this2.componentDidMount = function () {
            for (var _len14 = arguments.length, rest = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
                rest[_key14] = arguments[_key14];
            }

            return _makeJsClassGreatAgain(_this2, 'componentDidMount', rest);
        };

        _this2.registerValidator = function () {
            for (var _len15 = arguments.length, rest = Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
                rest[_key15] = arguments[_key15];
            }

            return _makeJsClassGreatAgain(_this2, 'registerValidator', rest);
        };

        _this2.fields = {};
        _this2.fieldErrors = {};
        _this2.fieldWatchers = {};
        _this2.values = {};
        _this2.submitCount = 0;
        _this2.state = {
            isValid: true
        };
        return _this2;
    }

    /**
     * LYFECICLE : This function is called when component
     * got mounted in the view.
     */


    _createClass(Component, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var logger = Logger.create("componentDidMount");
            logger.info("enter");
        }

        /**
         * This function process all field children.
         */

    }, {
        key: "processChildren",
        value: function processChildren(children) {
            var _this3 = this;

            if (!children) {
                return;
            }

            var logger = Logger.create("processChildren");
            logger.info("enter");

            return _react2.default.Children.map(children, function (component, idx) {
                var displayName = _lodash2.default.get(component, "type.displayName");
                var oldChildren = _lodash2.default.get(component, "props.children");
                var newChildren = void 0,
                    newProps = {};

                logger.info("children map : " + idx, { type: displayName });

                switch (displayName) {
                    case "field.base":
                    case "field.error":
                    case "button":
                        newProps.form = _this3;
                        break;
                    default:
                }

                // Set disabled for submit button when form is invalid.
                if (displayName == "button" && component.props.type == "submit") {
                    newProps.loading = _this3.props.loading;

                    logger.info("found submit button", {
                        formIsValid: _this3.state.isValid
                    });

                    if (_this3.props.disableSubmitButtonOnErrors && !_this3.state.isValid || _this3.props.disableSubmitButtonOnValidating && _this3.state.validating) {
                        newProps.disabled = true;
                    }
                    if (_this3.props.disableSubmitButtonOnErrors) {
                        newProps.disabled = !_this3.state.isValid;
                    }
                }

                // Process old children
                if (oldChildren) {
                    newChildren = _this3.processChildren(oldChildren);
                }

                // Clone component with new props and children
                return newChildren || _lodash2.default.size(newProps) ? _react2.default.cloneElement(component, newProps, newChildren) : component;
            });
        }

        /**
         * This function add a field to fields list.
         */

    }, {
        key: "addField",
        value: function addField(field) {
            var logger = Logger.create("addField");
            logger.info("enter", {
                name: field.props.name,
                value: field.state.value
            });

            this.fields[field.props.name] = field;
            this.values[field.props.name] = field.state.value;

            // Extract watch fields.
            (0, _watch2.default)(field, this.fieldWatchers);

            // Validate field.
            if (!field.props.preventValidateOnMount) {
                this.validateField(field);
            }
        }

        /**
         * This function removes a field from fields list.
         */

    }, {
        key: "removeField",
        value: function removeField(field) {
            var logger = Logger.create("removeField");
            logger.info("enter", {
                name: field.props.name
            });

            // Remove field from all watching fields.
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = field.watchingFields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var fieldName = _step.value;

                    _lodash2.default.pull(this.fieldWatchers[fieldName], field.props.name);
                }
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

            delete this.fields[field.props.name];
            delete this.values[field.props.name];
        }

        /**
         * This function add an field error component.
         */

    }, {
        key: "addFieldError",
        value: function addFieldError(errorCmp) {
            var logger = Logger.create("addFieldError");
            logger.info("enter", {
                for: errorCmp.props.for,
                validator: errorCmp.props.validator
            });

            var fieldErrors = this.fieldErrors[errorCmp.props.for] || {};
            fieldErrors[errorCmp.props.validator] = errorCmp;
            this.fieldErrors[errorCmp.props.for] = fieldErrors;
        }

        /**
         * This function remove an field error component.
         */

    }, {
        key: "removeFieldError",
        value: function removeFieldError(errorCmp) {
            var logger = Logger.create("removeFieldError");
            logger.info("enter", {
                for: errorCmp.props.for,
                validator: errorCmp.props.validator
            });

            var fieldErrors = this.fieldErrors[errorCmp.props.for] || {};
            delete fieldErrors[errorCmp.props.validator];
        }

        /**
         * This function validates a field value and updates
         * the valid state of this form.
         */

    }, {
        key: "validateField",
        value: function validateField(field) {
            var _this4 = this;

            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var logger = Logger.create("validateField : " + field.props.name);
            logger.info("enter");

            this.setState({ validating: true });
            field.setState({ validating: true });

            return (0, _validate2.default)(field, this.values, _lodash2.default.assign({}, opts, {
                validateOn: this.props.validateOn
            })).then(function (isValidMap) {
                logger.debug("validate completed", {
                    isValidMap: isValidMap,
                    stateIsValidMap: field.state.isValidMap
                });

                // Get list of validators the become valid and a list of
                // those that become invalid.
                var becomeValid = [];
                var becomeInvalid = [];
                var invalids = [];
                var valids = [];

                logger.debug("isValidMap keys", { keys: _lodash2.default.keys(isValidMap) });

                // Get the list of validators that become valid.
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = _lodash2.default.keys(isValidMap)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var name = _step2.value;

                        logger.debug("isValidMap key", { key: name });

                        if ((_lodash2.default.isUndefined(field.state.isValidMap[name]) || !field.state.isValidMap[name]) && isValidMap[name]) {
                            becomeValid.push(name);
                        } else if ((_lodash2.default.isUndefined(field.state.isValidMap[name]) || field.state.isValidMap[name]) && !isValidMap[name]) {
                            becomeInvalid.push(name);
                        }

                        if (isValidMap[name]) {
                            valids.push(name);
                        } else {
                            invalids.push(name);
                        }
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }

                logger.info("become valid or invalid", {
                    becomeValid: becomeValid, becomeInvalid: becomeInvalid
                });

                return new Promise(function (resolve) {
                    _this4.setState({ validating: false });

                    field.setState({ isValidMap: isValidMap, validating: false }, function () {

                        // Clear errors.
                        if (becomeValid.length && _this4.props.clearErrorOnBecomeValid) {
                            return _this4.updateFieldErrors(field, {
                                only: becomeValid
                            }).then(function () {
                                resolve({ becomeValid: becomeValid, becomeInvalid: becomeInvalid });
                            });
                        }

                        resolve();
                    });
                }).then(function () {
                    // Validate form.
                    return _this4.validateForm();
                });
            });
        }

        /**
         * This function validates all fields in the form.
         */

    }, {
        key: "validateForm",
        value: function validateForm() {
            var _this5 = this;

            var logger = Logger.create("validateForm");
            logger.info("enter");

            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = _lodash2.default.keys(this.fields)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var fieldName = _step3.value;

                    logger.debug("fieldName", { fieldName: fieldName });

                    var field = this.fields[fieldName];

                    if (!field.state.isValidMap) {
                        logger.debug("does not have isValidMap");
                        continue;
                    }

                    var _iteratorNormalCompletion4 = true;
                    var _didIteratorError4 = false;
                    var _iteratorError4 = undefined;

                    try {
                        for (var _iterator4 = _lodash2.default.keys(field.state.isValidMap)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                            var name = _step4.value;

                            if (!field.state.isValidMap[name]) {
                                logger.info("isValidMap false field", {
                                    isValidMap: field.state.isValidMap,
                                    isValidMapForItem: field.state.isValidMap[name]
                                });

                                return new Promise(function (resolve) {
                                    _this5.setState({ isValid: false }, resolve);
                                });
                            }
                        }
                    } catch (err) {
                        _didIteratorError4 = true;
                        _iteratorError4 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                _iterator4.return();
                            }
                        } finally {
                            if (_didIteratorError4) {
                                throw _iteratorError4;
                            }
                        }
                    }
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            return new Promise(function (resolve) {
                _this5.setState({ isValid: true }, resolve);
            });
        }

        /**
         * This function updates field error components.
         */

    }, {
        key: "updateFieldErrors",
        value: function updateFieldErrors(field) {
            var _this6 = this;

            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var logger = Logger.create("updateFieldErrors");
            logger.info("enter", { name: field.props.name });

            var isValidMap = field.state.isValidMap;
            var fieldErrors = this.fieldErrors[field.props.name] || {};
            var promises = [];

            logger.debug("isValidMaps", {
                isValidMap: field.state.isValidMap
            });

            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
                var _loop = function _loop() {
                    var name = _step5.value;


                    logger.debug("isValidMap iteration", {
                        name: name,
                        valid: isValidMap[name]
                    });

                    if (!fieldErrors[name] || opts.only && opts.only.indexOf(name) < 0 ||
                    // Prevent if the current event does not
                    // match the showOn prop of fieldError or the
                    // form showErrorsOn.
                    opts.event && (fieldErrors[name].props.showOn && fieldErrors[name].props.showOn != opts.event || !fieldErrors[name].props.showOn && _this6.props.showErrorsOn != opts.event)) {
                        return "continue";
                    }

                    promises.push(new Promise(function (resolve) {
                        fieldErrors[name].setState({
                            active: !isValidMap[name]
                        }, resolve);
                    }));
                };

                for (var _iterator5 = _lodash2.default.keys(isValidMap)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var _ret = _loop();

                    if (_ret === "continue") continue;
                }
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                        _iterator5.return();
                    }
                } finally {
                    if (_didIteratorError5) {
                        throw _iteratorError5;
                    }
                }
            }

            return Promise.all(promises).then(function (results) {
                logger.debug("all components updated");
                return results;
            });
        }

        /**
         * This function handles field value change.
         */

    }, {
        key: "onFieldChange",
        value: function onFieldChange(field, value) {
            var _this7 = this;

            var logger = Logger.create("onFieldChange : " + field.props.name);
            logger.info("enter", { value: value, hideErrorsOn: this.props.hideErrorsOn });

            var values = this.values;


            values[field.props.name] = value;

            field.setState({ value: value }, function () {
                Promise.resolve().then(function () {
                    return _this7.validateField(field, { event: "change" });
                }).then(function () {
                    return _this7.updateFieldErrors(field, { event: "change" });
                }).then(function () {
                    // Validate all watchers.
                    var _iteratorNormalCompletion6 = true;
                    var _didIteratorError6 = false;
                    var _iteratorError6 = undefined;

                    try {
                        for (var _iterator6 = (_this7.fieldWatchers[field.props.name] || [])[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                            var fieldName = _step6.value;

                            logger.debug("validate watching field", { fieldName: fieldName });
                            _this7.validateField(_this7.fields[fieldName]);
                        }
                    } catch (err) {
                        _didIteratorError6 = true;
                        _iteratorError6 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion6 && _iterator6.return) {
                                _iterator6.return();
                            }
                        } finally {
                            if (_didIteratorError6) {
                                throw _iteratorError6;
                            }
                        }
                    }
                });

                // Call on change
                _this7.props.onChange(values);
            });
        }

        /**
         * This function handles field blur.
         */

    }, {
        key: "onFieldBlur",
        value: function onFieldBlur(field) {
            var _this8 = this;

            var logger = Logger.create("onFieldBlur : " + field.props.name);
            logger.info("enter");

            field.blurCount = field.blurCount || 0;
            field.blurCount++;

            Promise.resolve().then(function () {
                return _this8.validateField(field, { event: "blur" });
            }).then(function () {
                return _this8.updateFieldErrors(field, { event: "blur" });
            });
        }

        /**
         * This function handles field focus.
         */

    }, {
        key: "onFieldFocus",
        value: function onFieldFocus(field) {
            var logger = Logger.create("onFieldFocus : " + field.props.name);
            logger.info("enter");
        }

        /**
         * This function handles submit event.
         */

    }, {
        key: "onSubmit",
        value: function () {
            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(evt) {
                var _this9 = this;

                var logger, resetFieldValues;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                logger = Logger.create("onSubmit");

                                logger.info("enter");

                                evt.preventDefault();

                                // Prevent submit when form is invalid or validating.

                                if (!(!this.state.isValid || this.state.validating)) {
                                    _context.next = 5;
                                    break;
                                }

                                return _context.abrupt("return");

                            case 5:
                                _context.prev = 5;
                                _context.next = 8;
                                return Promise.resolve(this.props.onSubmit(_lodash2.default.cloneDeep(this.values)));

                            case 8:
                                resetFieldValues = _context.sent;


                                if (resetFieldValues) {
                                    this.values = _lodash2.default.assign({}, this.values, resetFieldValues);

                                    // Set state for fields.
                                    _lodash2.default.forOwn(resetFieldValues, function (value, fieldName) {
                                        _this9.fields[fieldName].setState({ value: value }, function () {

                                            _this9.validateField(_this9.fields[fieldName]).then(function () {
                                                _lodash2.default.forOwn(_this9.fieldErrors[fieldName], function (fieldError) {
                                                    fieldError.setState({ active: false });
                                                });
                                            });
                                        });
                                    });
                                }
                                _context.next = 15;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context["catch"](5);

                                logger.error("onSubmit error", _context.t0);

                            case 15:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[5, 12]]);
            }));

            function onSubmit(_x3) {
                return _ref.apply(this, arguments);
            }

            return onSubmit;
        }()
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "form",
                { noValidate: true,
                    onSubmit: this.onSubmit },
                this.processChildren(this.props.children)
            );
        }
    }]);

    return Component;
}(_react2.default.Component);

Component.displayName = "form";
Component.defaultProps = {
    validateOn: "change",
    showErrorsOn: "blur",
    clearErrorOnBecomeValid: true,
    disableSubmitButtonOnErrors: true,
    disableSubmitButtonOnValidating: true,
    loading: false,
    onSubmit: function onSubmit() {
        return Promise.resolve();
    },
    onChange: function onChange() {}
};
Component.propTypes = {
    validateOn: _react2.default.PropTypes.oneOf(["change", "blur", "submit"]),
    showErrorsOn: _react2.default.PropTypes.oneOf(["change", "blur", "submit"]),
    clearErrorOnBecomeValid: _react2.default.PropTypes.bool,
    disableSubmitButtonOnErrors: _react2.default.PropTypes.bool,
    disableSubmitButtonOnValidating: _react2.default.PropTypes.bool,
    loading: _react2.default.PropTypes.bool,
    onSubmit: _react2.default.PropTypes.func
};
exports.default = Component;
module.exports = exports["default"];

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ })

/******/ });
});