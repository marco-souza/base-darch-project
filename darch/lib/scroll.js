(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("darch/lib/utils"), require("react"), require("lodash"), require("darch/lib/i18n"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["darch/lib/utils", "react", "lodash", "darch/lib/i18n", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["darch"] = factory(require("darch/lib/utils"), require("react"), require("lodash"), require("darch/lib/i18n"), require("react-dom"));
	else
		root["darch"] = factory(root["darch/lib/utils"], root["react"], root["lodash"], root["darch/lib/i18n"], root["react-dom"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_10__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 347);
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

/***/ 10:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(389);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(3)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js?{\"modules\":true,\"sourceMap\":false,\"camelCase\":true,\"localIdentName\":\"[hash:base64:5]\"}!../../node_modules/stylus-loader/index.js?{\"preferPathResolver\":\"webpack\"}!./styles.styl", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js?{\"modules\":true,\"sourceMap\":false,\"camelCase\":true,\"localIdentName\":\"[hash:base64:5]\"}!../../node_modules/stylus-loader/index.js?{\"preferPathResolver\":\"webpack\"}!./styles.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 347:
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

var _reactDom = __webpack_require__(10);

var _utils = __webpack_require__(0);

var _i18n = __webpack_require__(6);

var _i18n2 = _interopRequireDefault(_i18n);

var _styles = __webpack_require__(327);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _makeJsClassGreatAgain(_this, funcName, params) {
    return Object.getPrototypeOf(_this)[funcName].apply(_this, params);
}

var Logger = new _utils.LoggerFactory("scroll", { level: "debug" });

/**
 * Main component class.
 */

var Component = function (_React$Component) {
    _inherits(Component, _React$Component);

    function Component() {
        var _ref;

        var _temp, _temp2, _temp3, _temp4, _temp5, _temp6, _temp7, _this2, _ret;

        _classCallCheck(this, Component);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp7 = (_temp6 = (_temp5 = (_temp4 = (_temp3 = (_temp2 = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Component.__proto__ || Object.getPrototypeOf(Component)).call.apply(_ref, [this].concat(args))), _this2), _this2.componentDidMount = function () {
            for (var _len2 = arguments.length, rest = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                rest[_key2] = arguments[_key2];
            }

            return _makeJsClassGreatAgain(_this2, 'componentDidMount', rest);
        }, _temp), _this2.componentDidUpdate = function () {
            for (var _len3 = arguments.length, rest = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                rest[_key3] = arguments[_key3];
            }

            return _makeJsClassGreatAgain(_this2, 'componentDidUpdate', rest);
        }, _temp2), _this2.load = function () {
            for (var _len4 = arguments.length, rest = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                rest[_key4] = arguments[_key4];
            }

            return _makeJsClassGreatAgain(_this2, 'load', rest);
        }, _temp3), _this2.scrollTo = function () {
            for (var _len5 = arguments.length, rest = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                rest[_key5] = arguments[_key5];
            }

            return _makeJsClassGreatAgain(_this2, 'scrollTo', rest);
        }, _temp4), _this2.scrollToEnd = function () {
            for (var _len6 = arguments.length, rest = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
                rest[_key6] = arguments[_key6];
            }

            return _makeJsClassGreatAgain(_this2, 'scrollToEnd', rest);
        }, _temp5), _this2.onScroll = function () {
            for (var _len7 = arguments.length, rest = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
                rest[_key7] = arguments[_key7];
            }

            return _makeJsClassGreatAgain(_this2, 'onScroll', rest);
        }, _temp6), _this2.render = function () {
            for (var _len8 = arguments.length, rest = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
                rest[_key8] = arguments[_key8];
            }

            return _makeJsClassGreatAgain(_this2, 'render', rest);
        }, _temp7), _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(Component, [{
        key: "componentDidMount",


        /**
         * LYFECICLE : This function is called when component
         * got mounted in the view.
         */
        value: function componentDidMount() {
            var logger = Logger.create("componentDidMount");
            logger.info("enter");

            this.loadCount = 0;
            this.scrollToEndCallCount = 0;
            //this.prevScrollHeight = this.scrollRef.scrollHeight;

            // Load data for the first time.
            this.load({ event: "mount" });
        }

        /**
         * LYFECICLE : This function is called when props or
         * state gets changed.
         */

        /** React properties **/

    }, {
        key: "componentDidUpdate",
        value: function () {
            var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(prevProps) {
                var logger, count, prevCount;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                logger = Logger.create("componentDidUpdate");
                                count = _react2.default.Children.count(this.props.children);
                                prevCount = _react2.default.Children.count(prevProps.children);


                                logger.info("enter", { count: count, prevCount: prevCount });

                                if (!(this.props.id != prevProps.id)) {
                                    _context.next = 18;
                                    break;
                                }

                                logger.info("scroll id changed", {
                                    id: this.props.id,
                                    prevId: prevProps.id
                                });

                                _context.prev = 6;
                                _context.next = 9;
                                return this.load({ event: "id:changed" });

                            case 9:
                                logger.debug("load success");
                                _context.next = 15;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context["catch"](6);

                                logger.error("load error");

                            case 15:

                                // Reset prevY
                                this.prevY = this.scrollRef.scrollTop;
                                _context.next = 19;
                                break;

                            case 18:
                                // When children changed, trigger auto scroll if user 
                                // is within auto scroll zone.
                                if (count != prevCount) {
                                    this.scrollToEnd();
                                }

                            case 19:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[6, 12]]);
            }));

            function componentDidUpdate(_x) {
                return _ref2.apply(this, arguments);
            }

            return componentDidUpdate;
        }()

        /**
         * This function loads more data into the scene.
         */

    }, {
        key: "load",
        value: function () {
            var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(args) {
                var logger, opts, scrollHeight, prevScrollHeight, prevY, pos;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                logger = Logger.create("load");

                                logger.info("enter", args);

                                _context2.prev = 2;
                                _context2.next = 5;
                                return this.props.onLoad(args);

                            case 5:
                                opts = _context2.sent;
                                scrollHeight = this.scrollRef.scrollHeight;
                                prevScrollHeight = this.prevScrollHeight;
                                prevY = this.prevY;


                                opts = opts || {};

                                logger.debug("props onLoad success", {
                                    opts: opts,
                                    prevScrollHeight: prevScrollHeight,
                                    scrollHeight: scrollHeight,
                                    prevY: prevY,
                                    y: this.scrollRef.offsetHeight
                                });

                                if (opts.scrollToEnd) {
                                    this.scrollToEnd({ force: true });
                                } else if (!_lodash2.default.isUndefined(prevScrollHeight)) {
                                    pos = scrollHeight - prevScrollHeight + prevY;

                                    this.scrollTo(pos);
                                }
                                _context2.next = 17;
                                break;

                            case 14:
                                _context2.prev = 14;
                                _context2.t0 = _context2["catch"](2);

                                logger.error("props onLoad error", _context2.t0);

                            case 17:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[2, 14]]);
            }));

            function load(_x2) {
                return _ref3.apply(this, arguments);
            }

            return load;
        }()

        /**
         * This function scrolls the scroll container to a
         * specified position.
         */

    }, {
        key: "scrollTo",
        value: function scrollTo() {
            var pos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "end";

            var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                _ref4$force = _ref4.force,
                force = _ref4$force === undefined ? false : _ref4$force;

            var logger = Logger.create("scrollTo");
            logger.info("enter", { pos: pos, force: force });

            // Scroll to the end of list.
            if (pos == "end") {
                this.scrollToEnd({ force: force });
            }
            // Scroll to a specified position.
            else if (_lodash2.default.isNumber(pos)) {
                    this.scrollRef.scrollTop = pos;
                }
        }

        /**
         * This function scrolls the scroll to the end in the
         * specified direction.
         */

    }, {
        key: "scrollToEnd",
        value: function scrollToEnd() {
            var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref5$force = _ref5.force,
                force = _ref5$force === undefined ? false : _ref5$force;

            var logger = Logger.create("scrollToEnd");
            logger.info("enter", { force: force });

            this.scrollToEndCallCount++;

            var _props = this.props,
                loadOffset = _props.loadOffset,
                direction = _props.direction,
                autoScrollOffset = _props.autoScrollOffset;

            var height = this.scrollRef.offsetHeight;
            var scrollHeight = this.scrollRef.scrollHeight; //this.prevScrollHeight;//
            var isWithinAutoScrollZone = false;
            var y = this.scrollRef.scrollTop;
            var offset = scrollHeight - (y + height); // distance to the bottom

            // Scroll has passed loadOffset in specified direction.
            switch (direction) {
                case "top":
                    isWithinAutoScrollZone = y >= autoScrollOffset;

                    break;

                case "bottom":
                    isWithinAutoScrollZone = offset <= loadOffset;
                    break;

                default:
            }

            logger.debug("data", {
                loadOffset: loadOffset, direction: direction, autoScrollOffset: autoScrollOffset,
                height: height, scrollHeight: scrollHeight, isWithinAutoScrollZone: isWithinAutoScrollZone,
                y: y, offset: offset
            });

            // Perform auto scroll.
            if (isWithinAutoScrollZone || force) {
                // We are scrolling, so the edge gonna be reached
                // witch gonna trigger another auto scroll and so
                // on. This prevents auto scroll to trigger a load.
                this.preventLoad = true;

                var end = direction == "bottom" ? (0, _reactDom.findDOMNode)(this.bottomRef) : (0, _reactDom.findDOMNode)(this.topRef);

                end.scrollIntoView({ behavior: "smooth" });
            }
        }

        /**
         * This function handles scroll event.
         */

    }, {
        key: "onScroll",
        value: function onScroll(evt) {
            var logger = Logger.create("onScroll");

            if (evt.target != this.scrollRef) {
                return;
            }

            var _props2 = this.props,
                loadOffset = _props2.loadOffset,
                direction = _props2.direction,
                loading = _props2.loading;

            var height = this.scrollRef.offsetHeight;
            var scrollHeight = this.scrollRef.scrollHeight;
            var y = this.scrollRef.scrollTop;
            var reachedEdge = false;
            var prevY = this.prevY;
            var offset = scrollHeight - (y + height);
            var prevOffset = scrollHeight - (prevY + height);

            // Scroll has passed loadOffset in specified direction.
            switch (direction) {
                case "bottom":
                    reachedEdge = prevY > loadOffset && y <= loadOffset;
                    break;

                case "top":
                    reachedEdge = prevOffset > loadOffset && offset <= loadOffset;
                    break;

                default:
            }

            // Let's load more items into scroll.
            if (this.preventLoad) {
                this.preventLoad = false;
            } else if (reachedEdge && !loading) {
                this.load({ event: "edge:reached" });
            }

            logger.debug("data", {
                y: y,
                prevY: prevY,
                scrollHeight: scrollHeight,
                height: height,
                offset: offset,
                prevOffset: prevOffset,
                reachedEdge: reachedEdge,
                loadOffset: loadOffset
            });

            this.prevY = y;
            this.prevScrollHeight = this.scrollRef.scrollHeight;
        }

        /**
         * This function is responsible for generating the component's view.
         */

    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var _props3 = this.props,
                loading = _props3.loading,
                loadingComponent = _props3.loadingComponent,
                direction = _props3.direction;


            return _react2.default.createElement(
                "div",
                { className: _styles2.default.scroll,
                    onScroll: this.onScroll,
                    ref: function ref(_ref8) {
                        _this3.scrollRef = _ref8;
                    } },
                _react2.default.createElement("div", { ref: function ref(_ref6) {
                        _this3.topRef = _ref6;
                    } }),
                loading && direction == "bottom" ? loadingComponent : null,
                this.props.children,
                loading && direction == "top" ? loadingComponent : null,
                _react2.default.createElement("div", { ref: function ref(_ref7) {
                        _this3.bottomRef = _ref7;
                    } })
            );
        }
    }]);

    return Component;
}(_react2.default.Component);

Component.displayName = "scroll";
Component.defaultProps = {
    direction: "bottom",
    loadOffset: 100,
    autoScroll: true,
    autoScrollOffset: 0,
    onLoad: function onLoad() {},
    loading: false,
    loadingComponent: _react2.default.createElement(
        "div",
        { style: { textAlign: "center" } },
        _react2.default.createElement(_i18n2.default.Translate, { text: "_LOADING_" })
    )
};
Component.propTypes = {
    direction: _react2.default.PropTypes.oneOf(["top", "bottom"]),
    loadOffset: _react2.default.PropTypes.number,
    autoScroll: _react2.default.PropTypes.bool,
    autoScrollOffset: _react2.default.PropTypes.number,
    onLoad: _react2.default.PropTypes.func,
    loading: _react2.default.PropTypes.bool,
    loadingComponent: _react2.default.PropTypes.element
};
exports.default = Component;
module.exports = exports["default"];

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "._1SY1V {\n  overflow-y: scroll;\n  height: 100%;\n}\n", ""]);

// exports
exports.locals = {
	"scroll": "_1SY1V"
};

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ })

/******/ });
});