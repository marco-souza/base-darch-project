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
/******/ 	return __webpack_require__(__webpack_require__.s = 350);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(393);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(3)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js?{\"modules\":true,\"sourceMap\":false,\"camelCase\":true,\"localIdentName\":\"[hash:base64:5]\"}!../../node_modules/stylus-loader/index.js?{\"preferPathResolver\":\"webpack\"}!./main.styl", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js?{\"modules\":true,\"sourceMap\":false,\"camelCase\":true,\"localIdentName\":\"[hash:base64:5]\"}!../../node_modules/stylus-loader/index.js?{\"preferPathResolver\":\"webpack\"}!./main.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(329);

/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "@-moz-keyframes _2vcGv {\n  0%, 60%, 75%, 90%, 100% {\n    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  0% {\n    opacity: 0;\n    filter: alpha(opacity=0);\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n    -webkit-transform: translate3d(0, 3000px, 0);\n    -ms-transform: translate3d(0, 3000px, 0);\n    transform: translate3d(0, 3000px, 0);\n  }\n  60% {\n    opacity: 1;\n    filter: alpha(opacity=100);\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n    -webkit-transform: translate3d(0, -20px, 0);\n    -ms-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    -ms-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0);\n    -ms-transform: translate3d(0, -5px, 0);\n    transform: translate3d(0, -5px, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n    -ms-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes _2vcGv {\n  0%, 60%, 75%, 90%, 100% {\n    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  0% {\n    opacity: 0;\n    filter: alpha(opacity=0);\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n    -webkit-transform: translate3d(0, 3000px, 0);\n    -ms-transform: translate3d(0, 3000px, 0);\n    transform: translate3d(0, 3000px, 0);\n  }\n  60% {\n    opacity: 1;\n    filter: alpha(opacity=100);\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n    -webkit-transform: translate3d(0, -20px, 0);\n    -ms-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    -ms-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0);\n    -ms-transform: translate3d(0, -5px, 0);\n    transform: translate3d(0, -5px, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n    -ms-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n@-o-keyframes _2vcGv {\n  0%, 60%, 75%, 90%, 100% {\n    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  0% {\n    opacity: 0;\n    filter: alpha(opacity=0);\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n    -webkit-transform: translate3d(0, 3000px, 0);\n    -ms-transform: translate3d(0, 3000px, 0);\n    transform: translate3d(0, 3000px, 0);\n  }\n  60% {\n    opacity: 1;\n    filter: alpha(opacity=100);\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n    -webkit-transform: translate3d(0, -20px, 0);\n    -ms-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    -ms-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0);\n    -ms-transform: translate3d(0, -5px, 0);\n    transform: translate3d(0, -5px, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n    -ms-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes _2vcGv {\n  0%, 60%, 75%, 90%, 100% {\n    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n  }\n  0% {\n    opacity: 0;\n    filter: alpha(opacity=0);\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n    -webkit-transform: translate3d(0, 3000px, 0);\n    -ms-transform: translate3d(0, 3000px, 0);\n    transform: translate3d(0, 3000px, 0);\n  }\n  60% {\n    opacity: 1;\n    filter: alpha(opacity=100);\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n    -webkit-transform: translate3d(0, -20px, 0);\n    -ms-transform: translate3d(0, -20px, 0);\n    transform: translate3d(0, -20px, 0);\n  }\n  75% {\n    -webkit-transform: translate3d(0, 10px, 0);\n    -ms-transform: translate3d(0, 10px, 0);\n    transform: translate3d(0, 10px, 0);\n  }\n  90% {\n    -webkit-transform: translate3d(0, -5px, 0);\n    -ms-transform: translate3d(0, -5px, 0);\n    transform: translate3d(0, -5px, 0);\n  }\n  100% {\n    -webkit-transform: translate3d(0, 0, 0);\n    -ms-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n@-moz-keyframes _188gg {\n  20% {\n    opacity: 1;\n    filter: alpha(opacity=100);\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n    -webkit-transform: translate3d(-20px, 0, 0);\n    -ms-transform: translate3d(-20px, 0, 0);\n    transform: translate3d(-20px, 0, 0);\n  }\n  100% {\n    opacity: 0;\n    filter: alpha(opacity=0);\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n    -webkit-transform: translate3d(2000px, 0, 0);\n    -ms-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n@-webkit-keyframes _188gg {\n  20% {\n    opacity: 1;\n    filter: alpha(opacity=100);\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n    -webkit-transform: translate3d(-20px, 0, 0);\n    -ms-transform: translate3d(-20px, 0, 0);\n    transform: translate3d(-20px, 0, 0);\n  }\n  100% {\n    opacity: 0;\n    filter: alpha(opacity=0);\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n    -webkit-transform: translate3d(2000px, 0, 0);\n    -ms-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n@-o-keyframes _188gg {\n  20% {\n    opacity: 1;\n    filter: alpha(opacity=100);\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n    -webkit-transform: translate3d(-20px, 0, 0);\n    -ms-transform: translate3d(-20px, 0, 0);\n    transform: translate3d(-20px, 0, 0);\n  }\n  100% {\n    opacity: 0;\n    filter: alpha(opacity=0);\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n    -webkit-transform: translate3d(2000px, 0, 0);\n    -ms-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n@keyframes _188gg {\n  20% {\n    opacity: 1;\n    filter: alpha(opacity=100);\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n    -webkit-transform: translate3d(-20px, 0, 0);\n    -ms-transform: translate3d(-20px, 0, 0);\n    transform: translate3d(-20px, 0, 0);\n  }\n  100% {\n    opacity: 0;\n    filter: alpha(opacity=0);\n    -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n    -webkit-transform: translate3d(2000px, 0, 0);\n    -ms-transform: translate3d(2000px, 0, 0);\n    transform: translate3d(2000px, 0, 0);\n  }\n}\nhtml {\n  margin: 0;\n  font-family: \"Raleway\", \"Helvetica Nue\", Helvetica, Arial, sans-serif;\n  font-size: 18px;\n  font-weight: 200;\n  text-align: justify;\n  line-height: 1.5;\n}\nhtml *,\nhtml *:before,\nhtml *:after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\nhtml input,\nhtml select,\nhtml textarea,\nhtml button {\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n}\nhtml code:not(.prism) {\n  background: #f3f3f3;\n  padding: 0.1em 0.2em;\n  color: #d64541;\n  border-radius: 0.1em;\n}\nhtml h1 {\n  font-family: \"Raleway\", \"Helvetica Nue\", Helvetica, Arial, sans-serif;\n  font-weight: 200;\n  line-height: 1.5;\n  font-size: 63px;\n  font-weight: 400;\n  margin: 144px 0 54px 0;\n}\nhtml h2 {\n  font-family: \"Raleway\", \"Helvetica Nue\", Helvetica, Arial, sans-serif;\n  font-weight: 200;\n  line-height: 1.5;\n  font-size: 45px;\n  margin: 72px 0 36px 0;\n  font-weight: 400;\n}\nhtml h3 {\n  font-family: \"Raleway\", \"Helvetica Nue\", Helvetica, Arial, sans-serif;\n  font-weight: 200;\n  line-height: 1.5;\n  font-size: 27px;\n  margin: 54px 0 27px 0;\n  font-weight: 400;\n}\nhtml h4 {\n  font-family: \"Raleway\", \"Helvetica Nue\", Helvetica, Arial, sans-serif;\n  font-weight: 200;\n  line-height: 1.5;\n  font-size: 21.599999999999998px;\n  margin: 36px 0 18px 0;\n  font-weight: 400;\n}\nhtml h5 {\n  font-family: \"Raleway\", \"Helvetica Nue\", Helvetica, Arial, sans-serif;\n  font-weight: 200;\n  line-height: 1.5;\n  font-size: 19.8px;\n  margin: 36px 0 10.799999999999999px 0;\n  font-weight: 400;\n}\nhtml h6 {\n  font-family: \"Raleway\", \"Helvetica Nue\", Helvetica, Arial, sans-serif;\n  font-weight: 200;\n  line-height: 1.5;\n  font-size: 18px;\n  margin: 36px 0 5.399999999999999px 0;\n  font-weight: 600 !important;\n}\nhtml .headline {\n  padding-bottom: 0.2em;\n  border-bottom: 1px solid #ddd;\n}\nhtml p {\n  margin: 0;\n  padding: 0;\n}\nhtml p + p {\n  margin-top: 1em;\n}\nhtml .text-left {\n  text-align: left;\n}\nhtml .text-center {\n  text-align: center;\n}\nhtml .text-right {\n  text-align: right;\n}\nhtml a {\n  color: #1e8bc3;\n}\nhtml a:hover {\n  color: #1b7db0;\n}\nhtml .margin-none {\n  margin: 0 !important;\n}\n@media (max-width: 767px) {\n  html .table-container {\n    overflow-x: scroll;\n    border: 1px solid #ddd;\n  }\n}\nhtml table {\n  border-collapse: collapse;\n  vertical-align: middle;\n  width: 100%;\n/*@media (min-width: $screen-tablet-min)\n            width: 100%;*/\n}\nhtml table th,\nhtml table td {\n  padding: 1em;\n}\nhtml table th {\n  font-weight: 600;\n}\nhtml table thead tr:first-child th {\n  border-top: 3px solid #eee;\n}\nhtml table thead tr:last-child th {\n  border-bottom: 1px solid #ddd;\n}\nhtml table tbody tr:last-child td {\n  border-bottom: 3px solid #eee;\n}\n", ""]);

// exports
exports.locals = {
	"baseUnit": "px",
	"textSize": "18",
	"colorLight": "#fff",
	"colorDark": "#424242",
	"colorPositive": "#4183d7",
	"colorMoody": "#397cac",
	"colorCalm": "#26c6da",
	"colorStable": "#c6ccd2",
	"colorSuccess": "#26a65b",
	"colorWarning": "#f2b420",
	"colorDanger": "#ed4545",
	"bounceInUp": "_2vcGv",
	"bounceOutRight": "_188gg"
};

/***/ })

/******/ });
});