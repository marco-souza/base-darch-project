webpackJsonp([3],{

/***/ 1367:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(148);

var _utils = __webpack_require__(3);

var _container = __webpack_require__(227);

var _container2 = _interopRequireDefault(_container);

var _grid = __webpack_require__(743);

var _grid2 = _interopRequireDefault(_grid);

var _bar = __webpack_require__(738);

var _bar2 = _interopRequireDefault(_bar);

var _i18n = __webpack_require__(30);

var _i18n2 = _interopRequireDefault(_i18n);

var _code = __webpack_require__(740);

var _code2 = _interopRequireDefault(_code);

var _label = __webpack_require__(744);

var _label2 = _interopRequireDefault(_label);

var _section = __webpack_require__(745);

var _section2 = _interopRequireDefault(_section);

var _form = __webpack_require__(742);

var _form2 = _interopRequireDefault(_form);

var _field = __webpack_require__(741);

var _field2 = _interopRequireDefault(_field);

var _button = __webpack_require__(226);

var _button2 = _interopRequireDefault(_button);

var _callout = __webpack_require__(739);

var _callout2 = _interopRequireDefault(_callout);

var _text = __webpack_require__(746);

var _text2 = _interopRequireDefault(_text);

var _spinner = __webpack_require__(151);

var _spinner2 = _interopRequireDefault(_spinner);

var _lodash = __webpack_require__(17);

var _lodash2 = _interopRequireDefault(_lodash);

var _logo_icon = __webpack_require__(1372);

var _logo_icon2 = _interopRequireDefault(_logo_icon);

var _styles = __webpack_require__(1370);

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _makeJsClassGreatAgain(_this, funcName, params) {
    return Object.getPrototypeOf(_this)[funcName].apply(_this, params);
}

var Logger = new _utils.LoggerFactory("app.home");

/**
 * Main component class.
 */

var Component = function (_React$Component) {
    _inherits(Component, _React$Component);

    /**
     * This function constructs a new instance of the component.
     */
    function Component(props) {
        _classCallCheck(this, Component);

        var _this2 = _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this, props));

        _this2.render = function () {
            for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
                rest[_key] = arguments[_key];
            }

            return _makeJsClassGreatAgain(_this2, 'render', rest);
        };

        _this2.renderFieldSection = function () {
            for (var _len2 = arguments.length, rest = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                rest[_key2] = arguments[_key2];
            }

            return _makeJsClassGreatAgain(_this2, 'renderFieldSection', rest);
        };

        _this2.renderFormSection = function () {
            for (var _len3 = arguments.length, rest = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                rest[_key3] = arguments[_key3];
            }

            return _makeJsClassGreatAgain(_this2, 'renderFormSection', rest);
        };

        _this2.renderBarSection = function () {
            for (var _len4 = arguments.length, rest = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                rest[_key4] = arguments[_key4];
            }

            return _makeJsClassGreatAgain(_this2, 'renderBarSection', rest);
        };

        _this2.renderGridSection = function () {
            for (var _len5 = arguments.length, rest = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                rest[_key5] = arguments[_key5];
            }

            return _makeJsClassGreatAgain(_this2, 'renderGridSection', rest);
        };

        _this2.renderUsageSection = function () {
            for (var _len6 = arguments.length, rest = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
                rest[_key6] = arguments[_key6];
            }

            return _makeJsClassGreatAgain(_this2, 'renderUsageSection', rest);
        };

        _this2.onCreateOption = function () {
            for (var _len7 = arguments.length, rest = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
                rest[_key7] = arguments[_key7];
            }

            return _makeJsClassGreatAgain(_this2, 'onCreateOption', rest);
        };

        _this2.onMenuClose = function () {
            for (var _len8 = arguments.length, rest = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
                rest[_key8] = arguments[_key8];
            }

            return _makeJsClassGreatAgain(_this2, 'onMenuClose', rest);
        };

        _this2.loadOptions = function () {
            for (var _len9 = arguments.length, rest = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
                rest[_key9] = arguments[_key9];
            }

            return _makeJsClassGreatAgain(_this2, 'loadOptions', rest);
        };

        _this2.componentDidMount = function () {
            for (var _len10 = arguments.length, rest = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
                rest[_key10] = arguments[_key10];
            }

            return _makeJsClassGreatAgain(_this2, 'componentDidMount', rest);
        };

        _this2.state = {
            selectValue: []
        };

        _this2.originalOptions = [];

        _this2.actionOption = {
            value: "show_modal_action",
            label: "_SHOW_MODAL_ACTION_LABEL_",
            action: function action() {
                _this2.setState({ isModalOpen: true });
            }
        };

        // Load code languages
        _code2.default.loadLanguage("jsx");
        _code2.default.loadLanguage("bash");

        // Set initial options state.
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = Array(50).keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var i = _step.value;

                _this2.originalOptions.push({
                    value: "val_" + i,
                    label: "i am num " + i
                });
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

        _this2.originalOptions.push({
            value: "val_100",
            label: "very big text to prove some point in relativism and eferism of things built with love in the heart"
        });
        return _this2;
    }

    /**
     * LYFECICLE : This function is called when component
     * got mounted in the view.
     */

    /** React properties **/


    _createClass(Component, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var logger = Logger.create("componentDidMount");
            logger.info("enter");

            this.multiOptions = true;
        }

        /**
         * This function load options based on search query.
         */

    }, {
        key: "loadOptions",
        value: function loadOptions(searchValue) {
            var _this3 = this;

            var logger = Logger.create("loadOptions");
            logger.info("enter", { searchValue: searchValue });

            this.setState({ loadingOptions: true });

            setTimeout(function () {
                var originalOptions = _this3.originalOptions;

                // Filter out based on search value.
                var options = _lodash2.default.filter(originalOptions, function (option) {
                    if (searchValue && option.label.indexOf(searchValue) < 0) {
                        return false;
                    }

                    return true;
                });

                //logger.debug("loaded options", {options, originalOptions});

                // First option is an action that shows the modal.
                options.shift(_this3.actionOption);

                _this3.setState({
                    options: options,
                    loadingOptions: false
                });
            }, 2000);
        }
    }, {
        key: "onMenuClose",
        value: function onMenuClose() {
            this.setState({ options: null });
        }
    }, {
        key: "onCreateOption",
        value: function onCreateOption(value) {
            var logger = Logger.create("onCreateOption");
            var options = this.state.options.concat([{
                value: value,
                label: value
            }]);

            logger.info("enter", { value: value, options: options });

            this.setState({
                options: options
            });
        }

        /**
         * This function renders the usage section.
         */

    }, {
        key: "renderUsageSection",
        value: function renderUsageSection() {
            return _react2.default.createElement(
                _section2.default,
                null,
                _react2.default.createElement(
                    "h3",
                    null,
                    _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_USAGE_TITLE_" })
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_USAGE_TEXT_1_" })
                ),
                _react2.default.createElement(
                    "div",
                    { className: _styles2.default.codeContainer },
                    _react2.default.createElement(_code2.default, { lang: "bash", value: "npm install --save darch" })
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_USAGE_TEXT_2_" })
                ),
                _react2.default.createElement(
                    "div",
                    { className: _styles2.default.codeContainer },
                    _react2.default.createElement(_code2.default, { lang: "js", value: "import Form from \"darch/lib/form\";\n\n// For old school guys, you can do:\n// let Form = require(\"darch/lib/form\");" })
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_USAGE_TEXT_3_" })
                ),
                _react2.default.createElement(
                    "div",
                    { className: _styles2.default.codeContainer },
                    _react2.default.createElement(_code2.default, { lang: "js", value: "import {Form,Field,Container} from \"darch\";\n\n// For old school guys, you have to do:\n// let {Form,Field,Container} = require(\"darch\");\n\n// And for ES5 prehistoric guys:\n// var Reakit = require(\"darch\");\n// var Form = Reakit.Form;" })
                ),
                _react2.default.createElement(
                    "div",
                    { className: _styles2.default.calloutContainer },
                    _react2.default.createElement(
                        _callout2.default,
                        { color: "warning", title: "_SECTION_USAGE_STYLES_CALLOUT_TITLE_" },
                        _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_USAGE_STYLES_CALLOUT_TEXT_" })
                    )
                )
            );
        }

        /**
         * This function renders the grid section.
         */

    }, {
        key: "renderGridSection",
        value: function renderGridSection() {
            return _react2.default.createElement(
                _section2.default,
                null,
                _react2.default.createElement(
                    "h2",
                    { className: "headline" },
                    "Grid ",
                    _react2.default.createElement(
                        _label2.default,
                        { scale: 0.8, color: "moody" },
                        _react2.default.createElement(_i18n2.default.Translate, { text: "_MODULE_LABEL_TEXT_" })
                    )
                ),
                _react2.default.createElement(
                    "p",
                    null,
                    _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_GRID_INTRO_" })
                ),
                _react2.default.createElement(
                    _section2.default,
                    null,
                    _react2.default.createElement(
                        "h6",
                        null,
                        _react2.default.createElement(_i18n2.default.Translate, { text: "_CODE_EXAMPLE_SECTION_TITLE_" })
                    ),
                    _react2.default.createElement(_code2.default, { lang: "jsx",
                        value: "<Grid>\n    <Grid.Cell>\n        <div style={{margin-bottom: 20pt;padding: 10pt;background: #f5f5f5;}}>\n            One\n        </div>\n    </Grid.Cell>\n\n    <Grid.Cell span={2}>\n        <div style={{margin-bottom: 20pt;padding: 10pt;background: #f5f5f5;}}>\n            Two\n        </div>\n    </Grid.Cell>\n\n    <Grid.Cell>\n        <div style={{margin-bottom: 20pt;padding: 10pt;background: #f5f5f5;}}>\n            Three\n        </div>\n    </Grid.Cell>\n</Grid>" })
                ),
                _react2.default.createElement(
                    _section2.default,
                    null,
                    _react2.default.createElement(
                        "h6",
                        null,
                        _react2.default.createElement(_i18n2.default.Translate, { text: "_CODE_EXAMPLE_RESULT_SECTION_TITLE_" })
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: _styles2.default.resultBox },
                        _react2.default.createElement(
                            _grid2.default,
                            null,
                            _react2.default.createElement(
                                _grid2.default.Cell,
                                null,
                                _react2.default.createElement(
                                    "div",
                                    { className: _styles2.default.box },
                                    "One"
                                )
                            ),
                            _react2.default.createElement(
                                _grid2.default.Cell,
                                { span: 2 },
                                _react2.default.createElement(
                                    "div",
                                    { className: _styles2.default.box },
                                    "Two"
                                )
                            ),
                            _react2.default.createElement(
                                _grid2.default.Cell,
                                null,
                                _react2.default.createElement(
                                    "div",
                                    { className: _styles2.default.box },
                                    "Three"
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    _section2.default,
                    null,
                    _react2.default.createElement(
                        "h3",
                        null,
                        _react2.default.createElement(
                            "code",
                            null,
                            "Grid"
                        ),
                        " ",
                        _react2.default.createElement(
                            _label2.default,
                            { scale: 0.8, color: "warning" },
                            _react2.default.createElement(_i18n2.default.Translate, { text: "_COMPONENT_LABEL_TEXT_" })
                        )
                    ),
                    _react2.default.createElement(
                        _section2.default,
                        null,
                        _react2.default.createElement(
                            "div",
                            { className: _styles2.default.tableContainer },
                            _react2.default.createElement(
                                "table",
                                { className: _styles2.default.propsTable },
                                _react2.default.createElement(
                                    "thead",
                                    null,
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_PROPERTY_TH_" })
                                        ),
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_TYPE_TH_" })
                                        ),
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_DEFAULT_TH_" })
                                        ),
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_DESCRIPTION_TH_" })
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    "tbody",
                                    null,
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "spots"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "number"
                                        ),
                                        _react2.default.createElement("td", null),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_GRID_COMP_GRID_PROP_SPOTS_DESCRIPTION_" })
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    _section2.default,
                    null,
                    _react2.default.createElement(
                        "h3",
                        null,
                        _react2.default.createElement(
                            "code",
                            null,
                            "Grid.Cell"
                        ),
                        " ",
                        _react2.default.createElement(
                            _label2.default,
                            { scale: 0.8, color: "warning" },
                            _react2.default.createElement(_i18n2.default.Translate, { text: "_COMPONENT_LABEL_TEXT_" })
                        )
                    ),
                    _react2.default.createElement(
                        _section2.default,
                        null,
                        _react2.default.createElement(
                            "div",
                            { className: _styles2.default.tableContainer },
                            _react2.default.createElement(
                                "table",
                                { className: _styles2.default.propsTable },
                                _react2.default.createElement(
                                    "thead",
                                    null,
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_PROPERTY_TH_" })
                                        ),
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_TYPE_TH_" })
                                        ),
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_DEFAULT_TH_" })
                                        ),
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_DESCRIPTION_TH_" })
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    "tbody",
                                    null,
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "span"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "number"
                                        ),
                                        _react2.default.createElement("td", null),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_GRID_COMP_CELL_PROP_SPAN_DESCRIPTION_" })
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }

        /**
         * This function renders the bar section.
         */

    }, {
        key: "renderBarSection",
        value: function renderBarSection() {
            return _react2.default.createElement(
                _section2.default,
                null,
                _react2.default.createElement(
                    "h2",
                    { className: "headline" },
                    "Bar ",
                    _react2.default.createElement(
                        _label2.default,
                        { scale: 0.8, color: "moody" },
                        _react2.default.createElement(_i18n2.default.Translate, { text: "_MODULE_LABEL_TEXT_" })
                    )
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_BAR_INTRO_" })
                ),
                _react2.default.createElement(
                    _section2.default,
                    null,
                    _react2.default.createElement(
                        "h6",
                        null,
                        _react2.default.createElement(_i18n2.default.Translate, { text: "_CODE_EXAMPLE_SECTION_TITLE_" })
                    ),
                    _react2.default.createElement(_code2.default, { lang: "jsx",
                        value: "<Bar fixedOnTop={false} open={this.state.barOpen} onToggle={() => { this.setState({barOpen: !this.state.barOpen}); }}>\n    <Bar.Container withBottomLine={true}>\n        <Bar.Header>\n            <Bar.Menu togglable={false}>\n                <Bar.Item>\n                    <Link to=\"/a\">\n                        <img className={styles.logo} src={logoIcon} />\n                    </Link>\n                </Bar.Item>\n            </Bar.Menu>\n\n            <Bar.Toggle\n                openComponent={<span className=\"icon-menu\"></span>}\n                closeComponent={<span className=\"icon-delete\"></span>}>\n            </Bar.Toggle>\n        </Bar.Header>\n        <Bar.Body>\n            <Bar.Menu>\n                <Bar.Item>\n                    <Link to=\"/a\">Home</Link>\n                </Bar.Item>\n            </Bar.Menu>\n        </Bar.Body>\n    </Bar.Container>\n</Bar>" })
                ),
                _react2.default.createElement(
                    _section2.default,
                    null,
                    _react2.default.createElement(
                        "h6",
                        null,
                        _react2.default.createElement(_i18n2.default.Translate, { text: "_CODE_EXAMPLE_RESULT_SECTION_TITLE_" })
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: _styles2.default.resultBox },
                        _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_BAR_CODE_EXAMPLE_RESULT_TEXT_" })
                    )
                ),
                _react2.default.createElement(
                    _section2.default,
                    null,
                    _react2.default.createElement(
                        "h3",
                        null,
                        _react2.default.createElement(
                            "code",
                            null,
                            "Bar"
                        ),
                        " ",
                        _react2.default.createElement(
                            _label2.default,
                            { scale: 0.8, color: "warning" },
                            _react2.default.createElement(_i18n2.default.Translate, { text: "_COMPONENT_LABEL_TEXT_" })
                        )
                    ),
                    _react2.default.createElement(
                        _section2.default,
                        null,
                        _react2.default.createElement(
                            "div",
                            { className: _styles2.default.tableContainer },
                            _react2.default.createElement(
                                "table",
                                { className: _styles2.default.propsTable },
                                _react2.default.createElement(
                                    "thead",
                                    null,
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_PROPERTY_TH_" })
                                        ),
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_TYPE_TH_" })
                                        ),
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_DEFAULT_TH_" })
                                        ),
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_DESCRIPTION_TH_" })
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    "tbody",
                                    null,
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "fixedOnTop"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "bool"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "false"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_BAR_COMP_BAR_PROP_FIXEDONTOP_DESCRIPTION_" })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "open"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "bool"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "false"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_BAR_COMP_BAR_PROP_OPEN_DESCRIPTION_" })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "onToggle"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "func"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "noop"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_BAR_COMP_BAR_PROP_ONTOGGLE_DESCRIPTION_" })
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    _section2.default,
                    null,
                    _react2.default.createElement(
                        "h3",
                        null,
                        _react2.default.createElement(
                            "code",
                            null,
                            "Bar.Container"
                        ),
                        " ",
                        _react2.default.createElement(
                            _label2.default,
                            { scale: 0.8, color: "warning" },
                            _react2.default.createElement(_i18n2.default.Translate, { text: "_COMPONENT_LABEL_TEXT_" })
                        )
                    ),
                    _react2.default.createElement(
                        _section2.default,
                        null,
                        _react2.default.createElement(
                            "div",
                            null,
                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_BAR_COMP_CONTAINER_INTRO_" })
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: _styles2.default.tableContainer },
                            _react2.default.createElement(
                                "table",
                                { className: _styles2.default.propsTable },
                                _react2.default.createElement(
                                    "thead",
                                    null,
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_PROPERTY_TH_" })
                                        ),
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_TYPE_TH_" })
                                        ),
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_DEFAULT_TH_" })
                                        ),
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_DESCRIPTION_TH_" })
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    "tbody",
                                    null,
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "withBottomLine"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "bool"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "false"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_BAR_COMP_CONTAINER_PROP_WITHBOTTOMLINE_DESCRIPTION_" })
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    _section2.default,
                    null,
                    _react2.default.createElement(
                        "h3",
                        null,
                        _react2.default.createElement(
                            "code",
                            null,
                            "Bar.Header"
                        ),
                        " ",
                        _react2.default.createElement(
                            _label2.default,
                            { scale: 0.8, color: "warning" },
                            _react2.default.createElement(_i18n2.default.Translate, { text: "_COMPONENT_LABEL_TEXT_" })
                        )
                    ),
                    _react2.default.createElement(
                        _section2.default,
                        null,
                        _react2.default.createElement(
                            "div",
                            null,
                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_BAR_COMP_HEADER_INTRO_" })
                        )
                    )
                ),
                _react2.default.createElement(
                    _section2.default,
                    null,
                    _react2.default.createElement(
                        "h3",
                        null,
                        _react2.default.createElement(
                            "code",
                            null,
                            "Bar.Body"
                        ),
                        " ",
                        _react2.default.createElement(
                            _label2.default,
                            { scale: 0.8, color: "warning" },
                            _react2.default.createElement(_i18n2.default.Translate, { text: "_COMPONENT_LABEL_TEXT_" })
                        )
                    ),
                    _react2.default.createElement(
                        _section2.default,
                        null,
                        _react2.default.createElement(
                            "div",
                            null,
                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_BAR_COMP_BODY_INTRO_" })
                        )
                    )
                ),
                _react2.default.createElement(
                    _section2.default,
                    null,
                    _react2.default.createElement(
                        "h3",
                        null,
                        _react2.default.createElement(
                            "code",
                            null,
                            "Bar.Menu"
                        ),
                        " ",
                        _react2.default.createElement(
                            _label2.default,
                            { scale: 0.8, color: "warning" },
                            _react2.default.createElement(_i18n2.default.Translate, { text: "_COMPONENT_LABEL_TEXT_" })
                        )
                    ),
                    _react2.default.createElement(
                        _section2.default,
                        null,
                        _react2.default.createElement(
                            "div",
                            { className: _styles2.default.tableContainer },
                            _react2.default.createElement(
                                "table",
                                { className: _styles2.default.propsTable },
                                _react2.default.createElement(
                                    "thead",
                                    null,
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_PROPERTY_TH_" })
                                        ),
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_TYPE_TH_" })
                                        ),
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_DEFAULT_TH_" })
                                        ),
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_DESCRIPTION_TH_" })
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    "tbody",
                                    null,
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "togglable"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "bool"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "true"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_BAR_COMP_MENU_PROP_TOGGLABLE_DESCRIPTION_" })
                                        )
                                    )
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    _section2.default,
                    null,
                    _react2.default.createElement(
                        "h3",
                        null,
                        _react2.default.createElement(
                            "code",
                            null,
                            "Bar.Item"
                        ),
                        " ",
                        _react2.default.createElement(
                            _label2.default,
                            { scale: 0.8, color: "warning" },
                            _react2.default.createElement(_i18n2.default.Translate, { text: "_COMPONENT_LABEL_TEXT_" })
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_BAR_COMP_ITEM_INTRO_" })
                    )
                ),
                _react2.default.createElement(
                    _section2.default,
                    null,
                    _react2.default.createElement(
                        "h3",
                        null,
                        _react2.default.createElement(
                            "code",
                            null,
                            "Bar.Toggle"
                        ),
                        " ",
                        _react2.default.createElement(
                            _label2.default,
                            { scale: 0.8, color: "warning" },
                            _react2.default.createElement(_i18n2.default.Translate, { text: "_COMPONENT_LABEL_TEXT_" })
                        )
                    ),
                    _react2.default.createElement(
                        _section2.default,
                        null,
                        _react2.default.createElement(
                            "div",
                            null,
                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_BAR_COMP_TOGGLE_INTRO_" })
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: _styles2.default.tableContainer },
                            _react2.default.createElement(
                                "table",
                                { className: _styles2.default.propsTable },
                                _react2.default.createElement(
                                    "thead",
                                    null,
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_PROPERTY_TH_" })
                                        ),
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_TYPE_TH_" })
                                        ),
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_DEFAULT_TH_" })
                                        ),
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_DESCRIPTION_TH_" })
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    "tbody",
                                    null,
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "openComponent"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "element"
                                        ),
                                        _react2.default.createElement("td", null),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_BAR_COMP_TOGGLE_PROP_OPENCOMPONENT_DESCRIPTION_" })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "closeComponent"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "element"
                                        ),
                                        _react2.default.createElement("td", null),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_BAR_COMP_TOGGLE_PROP_CLOSECOMPONENT_DESCRIPTION_" })
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }

        /**
         * This function renders the form section.
         */

    }, {
        key: "renderFormSection",
        value: function renderFormSection() {
            var _this4 = this;

            return _react2.default.createElement(
                _section2.default,
                null,
                _react2.default.createElement(
                    "h2",
                    { className: "headline" },
                    "Form ",
                    _react2.default.createElement(
                        _label2.default,
                        { scale: 0.8, color: "moody" },
                        _react2.default.createElement(_i18n2.default.Translate, { text: "_MODULE_LABEL_TEXT_" })
                    )
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FORM_INTRO_" })
                ),
                _react2.default.createElement(
                    _section2.default,
                    null,
                    _react2.default.createElement(
                        "h6",
                        null,
                        _react2.default.createElement(_i18n2.default.Translate, { text: "_CODE_EXAMPLE_SECTION_TITLE_" })
                    ),
                    _react2.default.createElement(_code2.default, { lang: "jsx",
                        value: "<Form loading={this.state.formLoading}\nonSubmit={(data) => {\n    this.setState({formLoading: true});\n\n    setTimeout(() => {\n        this.setState({formLoading: false});\n    }, 5000);\n}}>\n    <Field.Section>\n        <Text scale={0.8}>\n            <i18n.Translate text=\"_EMAIL_FIELD_LABEL_\" />\n        </Text>\n        <Field.Text\n            name=\"test\"\n            placeholder=\"_EMAIL_FIELD_PLACEHOLDER_\"\n            scale={1.5}\n            validators=\"$required|$email\"/>\n        <Field.Error\n            for=\"test\"\n            validator=\"$required\"\n            message=\"_FIELD_ERROR_REQUIRED_\"/>\n        <Field.Error\n            for=\"test\"\n            validator=\"$email\"\n            message=\"_FIELD_ERROR_EMAIL_\"/>\n    </Field.Section>\n\n    <Field.Section>\n        <div>\n            <Button type=\"submit\" scale={1.5}>\n                <i18n.Translate text=\"_SEND_\" />\n            </Button>\n        </div>\n    </Field.Section>\n</Form>" })
                ),
                _react2.default.createElement(
                    _section2.default,
                    null,
                    _react2.default.createElement(
                        "h6",
                        null,
                        _react2.default.createElement(_i18n2.default.Translate, { text: "_CODE_EXAMPLE_RESULT_SECTION_TITLE_" })
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: _styles2.default.resultBox },
                        _react2.default.createElement(
                            _form2.default,
                            { loading: this.state.formLoading,
                                onSubmit: function onSubmit() {
                                    _this4.setState({ formLoading: true });

                                    setTimeout(function () {
                                        _this4.setState({ formLoading: false });
                                    }, 5000);
                                } },
                            _react2.default.createElement(
                                _field2.default.Section,
                                null,
                                _react2.default.createElement(
                                    _text2.default,
                                    { scale: 0.8 },
                                    _react2.default.createElement(_i18n2.default.Translate, { text: "_EMAIL_FIELD_LABEL_" })
                                ),
                                _react2.default.createElement(_field2.default.Text, {
                                    name: "test",
                                    placeholder: "_EMAIL_FIELD_PLACEHOLDER_",
                                    scale: 1.5,
                                    validators: "$required|$email" }),
                                _react2.default.createElement(_field2.default.Error, {
                                    "for": "test",
                                    validator: "$required",
                                    message: "_FIELD_ERROR_REQUIRED_" }),
                                _react2.default.createElement(_field2.default.Error, {
                                    "for": "test",
                                    validator: "$email",
                                    message: "_FIELD_ERROR_EMAIL_" })
                            ),
                            _react2.default.createElement(
                                _field2.default.Section,
                                null,
                                _react2.default.createElement(
                                    "div",
                                    null,
                                    _react2.default.createElement(
                                        _button2.default,
                                        { type: "submit", scale: 1.2 },
                                        _react2.default.createElement(_i18n2.default.Translate, { text: "_SEND_" })
                                    )
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    _section2.default,
                    null,
                    _react2.default.createElement(
                        _callout2.default,
                        { title: "_NOTE_" },
                        _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FORM_NOTE_CALLOUT_TEXT_" })
                    )
                ),
                _react2.default.createElement(
                    _section2.default,
                    null,
                    _react2.default.createElement(
                        "h3",
                        null,
                        _react2.default.createElement(
                            "code",
                            null,
                            "Form"
                        ),
                        " ",
                        _react2.default.createElement(
                            _label2.default,
                            { scale: 0.8, color: "warning" },
                            _react2.default.createElement(_i18n2.default.Translate, { text: "_COMPONENT_LABEL_TEXT_" })
                        )
                    ),
                    _react2.default.createElement(
                        _section2.default,
                        null,
                        _react2.default.createElement(
                            "div",
                            { className: _styles2.default.tableContainer },
                            _react2.default.createElement(
                                "table",
                                { className: _styles2.default.propsTable },
                                _react2.default.createElement(
                                    "thead",
                                    null,
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_PROPERTY_TH_" })
                                        ),
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_TYPE_TH_" })
                                        ),
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_DEFAULT_TH_" })
                                        ),
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_DESCRIPTION_TH_" })
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    "tbody",
                                    null,
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "loading"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "bool"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "false"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FORM_COMP_FORM_PROP_LOADING_DESCRIPTION_" })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "showErrorsOn"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "string"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "blur"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FORM_COMP_FORM_PROP_SHOWERRORSON_DESCRIPTION_" })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "clearErrorOnBecomeValid"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "bool"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "true"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FORM_COMP_FORM_PROP_CLEARERRORONBECOMEVALID_DESCRIPTION_" })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "disableSubmitButtonOnErrors"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "bool"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "true"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FORM_COMP_FORM_PROP_DISABLESUBMITBUTTONONERRORS_DESCRIPTION_" })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "disableSubmitButtonOnValidating"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "bool"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "true"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FORM_COMP_FORM_PROP_DISABLESUBMITBUTTONONVALIDATING_DESCRIPTION_" })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "onSubmit"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "func"
                                        ),
                                        _react2.default.createElement("td", null),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FORM_COMP_FORM_PROP_ONSUBMIT_DESCRIPTION_" })
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }

        /**
         * This function renders the field section.
         */

    }, {
        key: "renderFieldSection",
        value: function renderFieldSection() {
            var _this5 = this;

            return _react2.default.createElement(
                _section2.default,
                null,
                _react2.default.createElement(
                    "h2",
                    { className: "headline" },
                    "Field ",
                    _react2.default.createElement(
                        _label2.default,
                        { scale: 0.8, color: "moody" },
                        _react2.default.createElement(_i18n2.default.Translate, { text: "_MODULE_LABEL_TEXT_" })
                    )
                ),
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FIELD_INTRO_" })
                ),
                _react2.default.createElement(
                    "div",
                    { className: _styles2.default.calloutContainer },
                    _react2.default.createElement(
                        _callout2.default,
                        { color: "danger", title: "_SECTION_FIELD_NAME_WARNING_CALLOUT_TITLE_" },
                        _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FIELD_NAME_WARNING_CALLOUT_TEXT_" })
                    )
                ),
                _react2.default.createElement(
                    _section2.default,
                    null,
                    _react2.default.createElement(
                        "h3",
                        null,
                        _react2.default.createElement(
                            "code",
                            null,
                            "Field.Base"
                        ),
                        " ",
                        _react2.default.createElement(
                            _label2.default,
                            { scale: 0.8, color: "stable" },
                            _react2.default.createElement(_i18n2.default.Translate, { text: "_CONTAINER_LABEL_TEXT_" })
                        )
                    ),
                    _react2.default.createElement(
                        _section2.default,
                        null,
                        _react2.default.createElement(
                            "div",
                            null,
                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FIELD_COMP_BASE_INTRO_" })
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: _styles2.default.tableContainer },
                            _react2.default.createElement(
                                "table",
                                { className: _styles2.default.propsTable },
                                _react2.default.createElement(
                                    "thead",
                                    null,
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_PROPERTY_TH_" })
                                        ),
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_TYPE_TH_" })
                                        ),
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_DEFAULT_TH_" })
                                        ),
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_DESCRIPTION_TH_" })
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    "tbody",
                                    null,
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "validators"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "string, array"
                                        ),
                                        _react2.default.createElement("td", null),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FIELD_COMP_BASE_PROP_VALIDATORS_DESCRIPTION_" })
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _section2.default,
                        null,
                        _react2.default.createElement(
                            "h4",
                            null,
                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_DEFAULT_VALIDATORS_TITLE_" })
                        ),
                        _react2.default.createElement(
                            _section2.default,
                            null,
                            _react2.default.createElement(
                                "div",
                                null,
                                _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_DEFAULT_VALIDATORS_INTRO_" })
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: _styles2.default.tableContainer },
                                _react2.default.createElement(
                                    "table",
                                    { className: _styles2.default.defaultValidatorsTable },
                                    _react2.default.createElement(
                                        "thead",
                                        null,
                                        _react2.default.createElement(
                                            "tr",
                                            null,
                                            _react2.default.createElement(
                                                "th",
                                                null,
                                                _react2.default.createElement(_i18n2.default.Translate, { text: "_DEFAULT_VALIDATOR_TABLE_NAME_TH_" })
                                            ),
                                            _react2.default.createElement(
                                                "th",
                                                null,
                                                _react2.default.createElement(_i18n2.default.Translate, { text: "_DEFAULT_VALIDATOR_TABLE_OPTS_TH_" })
                                            ),
                                            _react2.default.createElement(
                                                "th",
                                                null,
                                                _react2.default.createElement(_i18n2.default.Translate, { text: "_DEFAULT_VALIDATOR_TABLE_DESCRIPTION_TH_" })
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tbody",
                                        null,
                                        _react2.default.createElement(
                                            "tr",
                                            null,
                                            _react2.default.createElement(
                                                "td",
                                                null,
                                                "$required"
                                            ),
                                            _react2.default.createElement("td", null),
                                            _react2.default.createElement(
                                                "td",
                                                null,
                                                _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_DEFAULT_VALIDATORS_REQUIRED_DESCRIPTION_" })
                                            )
                                        ),
                                        _react2.default.createElement(
                                            "tr",
                                            null,
                                            _react2.default.createElement(
                                                "td",
                                                null,
                                                "$email"
                                            ),
                                            _react2.default.createElement("td", null),
                                            _react2.default.createElement(
                                                "td",
                                                null,
                                                _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_DEFAULT_VALIDATORS_EMAIL_DESCRIPTION_" })
                                            )
                                        ),
                                        _react2.default.createElement(
                                            "tr",
                                            null,
                                            _react2.default.createElement(
                                                "td",
                                                null,
                                                "$alphanumeric"
                                            ),
                                            _react2.default.createElement("td", null),
                                            _react2.default.createElement(
                                                "td",
                                                null,
                                                _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_DEFAULT_VALIDATORS_ALPHANUMERIC_DESCRIPTION_" })
                                            )
                                        ),
                                        _react2.default.createElement(
                                            "tr",
                                            null,
                                            _react2.default.createElement(
                                                "td",
                                                null,
                                                "$lowercase"
                                            ),
                                            _react2.default.createElement("td", null),
                                            _react2.default.createElement(
                                                "td",
                                                null,
                                                _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_DEFAULT_VALIDATORS_LOWERCASE_DESCRIPTION_" })
                                            )
                                        ),
                                        _react2.default.createElement(
                                            "tr",
                                            null,
                                            _react2.default.createElement(
                                                "td",
                                                null,
                                                "$uppercase"
                                            ),
                                            _react2.default.createElement("td", null),
                                            _react2.default.createElement(
                                                "td",
                                                null,
                                                _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_DEFAULT_VALIDATORS_UPPERCASE_DESCRIPTION_" })
                                            )
                                        ),
                                        _react2.default.createElement(
                                            "tr",
                                            null,
                                            _react2.default.createElement(
                                                "td",
                                                null,
                                                "$digits"
                                            ),
                                            _react2.default.createElement("td", null),
                                            _react2.default.createElement(
                                                "td",
                                                null,
                                                _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_DEFAULT_VALIDATORS_DIGITS_DESCRIPTION_" })
                                            )
                                        ),
                                        _react2.default.createElement(
                                            "tr",
                                            null,
                                            _react2.default.createElement(
                                                "td",
                                                null,
                                                "$domain"
                                            ),
                                            _react2.default.createElement("td", null),
                                            _react2.default.createElement(
                                                "td",
                                                null,
                                                _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_DEFAULT_VALIDATORS_DOMAIN_DESCRIPTION_" })
                                            )
                                        ),
                                        _react2.default.createElement(
                                            "tr",
                                            null,
                                            _react2.default.createElement(
                                                "td",
                                                null,
                                                "$equal"
                                            ),
                                            _react2.default.createElement(
                                                "td",
                                                null,
                                                "opt_1"
                                            ),
                                            _react2.default.createElement(
                                                "td",
                                                null,
                                                _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_DEFAULT_VALIDATORS_EQUAL_DESCRIPTION_" })
                                            )
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    "div",
                                    { className: _styles2.default.calloutContainer },
                                    _react2.default.createElement(
                                        _callout2.default,
                                        { color: "moody", title: "_SECTION_DEFAULT_VALIDATORS_REGISTER_CALLOUT_TITLE_" },
                                        _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_DEFAULT_VALIDATORS_REGISTER_CALLOUT_TEXT_" })
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _section2.default,
                        null,
                        _react2.default.createElement(
                            "h4",
                            null,
                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_CUSTOM_VALIDATORS_TITLE_" })
                        ),
                        _react2.default.createElement(
                            _section2.default,
                            null,
                            _react2.default.createElement(
                                "div",
                                null,
                                _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_CUSTOM_VALIDATORS_INTRO_" })
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: _styles2.default.tableContainer },
                                _react2.default.createElement(
                                    "table",
                                    { className: _styles2.default.customValidatorsTable },
                                    _react2.default.createElement(
                                        "thead",
                                        null,
                                        _react2.default.createElement(
                                            "tr",
                                            null,
                                            _react2.default.createElement(
                                                "th",
                                                null,
                                                _react2.default.createElement(_i18n2.default.Translate, { text: "_CUSTOM_VALIDATOR_TABLE_KEY_TH_" })
                                            ),
                                            _react2.default.createElement(
                                                "th",
                                                null,
                                                _react2.default.createElement(_i18n2.default.Translate, { text: "_CUSTOM_VALIDATOR_TABLE_TYPE_TH_" })
                                            ),
                                            _react2.default.createElement(
                                                "th",
                                                null,
                                                _react2.default.createElement(_i18n2.default.Translate, { text: "_CUSTOM_VALIDATOR_TABLE_DESCRIPTION_TH_" })
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tbody",
                                        null,
                                        _react2.default.createElement(
                                            "tr",
                                            null,
                                            _react2.default.createElement(
                                                "td",
                                                null,
                                                "name"
                                            ),
                                            _react2.default.createElement(
                                                "td",
                                                null,
                                                "string"
                                            ),
                                            _react2.default.createElement(
                                                "td",
                                                null,
                                                _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_CUSTOM_VALIDATORS_KEY_NAME_DESCRIPTION_" })
                                            )
                                        ),
                                        _react2.default.createElement(
                                            "tr",
                                            null,
                                            _react2.default.createElement(
                                                "td",
                                                null,
                                                "watch"
                                            ),
                                            _react2.default.createElement(
                                                "td",
                                                null,
                                                "string,number,array"
                                            ),
                                            _react2.default.createElement(
                                                "td",
                                                null,
                                                _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_CUSTOM_VALIDATORS_KEY_WATCH_DESCRIPTION_" })
                                            )
                                        ),
                                        _react2.default.createElement(
                                            "tr",
                                            null,
                                            _react2.default.createElement(
                                                "td",
                                                null,
                                                "on"
                                            ),
                                            _react2.default.createElement(
                                                "td",
                                                null,
                                                "string"
                                            ),
                                            _react2.default.createElement(
                                                "td",
                                                null,
                                                _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_CUSTOM_VALIDATORS_KEY_ON_DESCRIPTION_" })
                                            )
                                        ),
                                        _react2.default.createElement(
                                            "tr",
                                            null,
                                            _react2.default.createElement(
                                                "td",
                                                null,
                                                "validate"
                                            ),
                                            _react2.default.createElement(
                                                "td",
                                                null,
                                                "funct"
                                            ),
                                            _react2.default.createElement(
                                                "td",
                                                null,
                                                _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_CUSTOM_VALIDATORS_KEY_VALIDATE_DESCRIPTION_" })
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _section2.default,
                            null,
                            _react2.default.createElement(
                                "h6",
                                null,
                                _react2.default.createElement(_i18n2.default.Translate, { text: "_CODE_EXAMPLE_SECTION_TITLE_" })
                            ),
                            _react2.default.createElement(_code2.default, { lang: "jsx",
                                value: "<Field.Section>                         \n    <Field.Text\n        name=\"nickName\"\n        value=\"test\"\n        placeholder=\"_NICKNAME_FIELD_PLACEHOLDER_\"\n        scale={1.5}\n        preventValidateOnMount={false}\n        validators={[\"$required\", {\n            name: \"chuck_or_god\",\n            on: \"blur\",\n            validate: (value, context) => {\n                return new Promise((resolve) => {\n                    setTimeout(() => {\n                        resolve(\n                            value == \"chucknorris\" || context.values.god\n                        );\n                    }, 5000);\n                });\n            }\n        }]}/>\n</Field.Section>" })
                        )
                    )
                ),
                _react2.default.createElement(
                    _section2.default,
                    null,
                    _react2.default.createElement(
                        "h3",
                        null,
                        _react2.default.createElement(
                            "code",
                            null,
                            "Field.Error"
                        ),
                        " ",
                        _react2.default.createElement(
                            _label2.default,
                            { scale: 0.8, color: "warning" },
                            _react2.default.createElement(_i18n2.default.Translate, { text: "_COMPONENT_LABEL_TEXT_" })
                        )
                    ),
                    _react2.default.createElement(
                        _section2.default,
                        null,
                        _react2.default.createElement(
                            "div",
                            null,
                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FIELD_COMP_ERROR_INTRO_" })
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: _styles2.default.tableContainer },
                            _react2.default.createElement(
                                "table",
                                { className: _styles2.default.propsTable },
                                _react2.default.createElement(
                                    "thead",
                                    null,
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_PROPERTY_TH_" })
                                        ),
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_TYPE_TH_" })
                                        ),
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_DEFAULT_TH_" })
                                        ),
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_DESCRIPTION_TH_" })
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    "tbody",
                                    null,
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "for"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "string"
                                        ),
                                        _react2.default.createElement("td", null),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FORM_COMP_ERROR_PROP_FOR_DESCRIPTION_" })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "validator"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "string"
                                        ),
                                        _react2.default.createElement("td", null),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FORM_COMP_ERROR_PROP_VALIDATOR_DESCRIPTION_" })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "message"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "string"
                                        ),
                                        _react2.default.createElement("td", null),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FORM_COMP_ERROR_PROP_MESSAGE_DESCRIPTION_" })
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _section2.default,
                        null,
                        _react2.default.createElement(
                            "h6",
                            null,
                            _react2.default.createElement(_i18n2.default.Translate, { text: "_CODE_EXAMPLE_SECTION_TITLE_" })
                        ),
                        _react2.default.createElement(_code2.default, { lang: "jsx",
                            value: "<Field.Section>\n    <Text scale={0.8}>\n        <i18n.Translate text=\"_EMAIL_FIELD_LABEL_\" />\n    </Text>\n    <Field.Text\n        name=\"test\"\n        placeholder=\"_EMAIL_FIELD_PLACEHOLDER_\"\n        scale={1.5}\n        validators=\"$required|$email\"/>\n    <Field.Error\n        for=\"test\"\n        validator=\"$required\"\n        message=\"_FIELD_ERROR_REQUIRED_\"/>\n    <Field.Error\n        for=\"test\"\n        validator=\"$email\"\n        message=\"_FIELD_ERROR_EMAIL_\"/>\n</Field.Section>" })
                    )
                ),
                _react2.default.createElement(
                    _section2.default,
                    null,
                    _react2.default.createElement(
                        "h3",
                        null,
                        _react2.default.createElement(
                            "code",
                            null,
                            "Field.Text"
                        ),
                        " ",
                        _react2.default.createElement(
                            _label2.default,
                            { scale: 0.8, color: "warning" },
                            _react2.default.createElement(_i18n2.default.Translate, { text: "_COMPONENT_LABEL_TEXT_" })
                        )
                    ),
                    _react2.default.createElement(
                        _section2.default,
                        null,
                        _react2.default.createElement(
                            "div",
                            null,
                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FIELD_COMP_TEXT_INTRO_" })
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: _styles2.default.tableContainer },
                            _react2.default.createElement(
                                "table",
                                { className: _styles2.default.propsTable },
                                _react2.default.createElement(
                                    "thead",
                                    null,
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_PROPERTY_TH_" })
                                        ),
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_TYPE_TH_" })
                                        ),
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_DEFAULT_TH_" })
                                        ),
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_DESCRIPTION_TH_" })
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    "tbody",
                                    null,
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "loading"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "bool"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "false"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FORM_COMP_FORM_PROP_LOADING_DESCRIPTION_" })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "showErrorsOn"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "string"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "blur"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FORM_COMP_FORM_PROP_SHOWERRORSON_DESCRIPTION_" })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "clearErrorOnBecomeValid"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "bool"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "true"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FORM_COMP_FORM_PROP_CLEARERRORONBECOMEVALID_DESCRIPTION_" })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "disableSubmitButtonOnErrors"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "bool"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "true"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FORM_COMP_FORM_PROP_DISABLESUBMITBUTTONONERRORS_DESCRIPTION_" })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "disableSubmitButtonOnValidating"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "bool"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "true"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FORM_COMP_FORM_PROP_DISABLESUBMITBUTTONONVALIDATING_DESCRIPTION_" })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "onSubmit"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "func"
                                        ),
                                        _react2.default.createElement("td", null),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FORM_COMP_FORM_PROP_ONSUBMIT_DESCRIPTION_" })
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _section2.default,
                        null,
                        _react2.default.createElement(
                            "h6",
                            null,
                            _react2.default.createElement(_i18n2.default.Translate, { text: "_CODE_EXAMPLE_SECTION_TITLE_" })
                        ),
                        _react2.default.createElement(_code2.default, { lang: "jsx",
                            value: "<Form loading={this.state.formLoading}\nonSubmit={(data) => {\n    this.setState({formLoading: true});\n\n    setTimeout(() => {\n        this.setState({formLoading: false});\n    }, 5000);\n}}>\n    <Field.Section>\n        <Text scale={0.8}>\n            <i18n.Translate text=\"_EMAIL_FIELD_LABEL_\" />\n        </Text>\n        <Field.Text\n            name=\"test\"\n            placeholder=\"_EMAIL_FIELD_PLACEHOLDER_\"\n            scale={1.5}\n            validators=\"$required|$email\"/>\n        <Field.Error\n            for=\"test\"\n            validator=\"$required\"\n            message=\"_FIELD_ERROR_REQUIRED_\"/>\n        <Field.Error\n            for=\"test\"\n            validator=\"$email\"\n            message=\"_FIELD_ERROR_EMAIL_\"/>\n    </Field.Section>\n\n    <Field.Section>\n        <div>\n            <Button type=\"submit\" scale={1.5}>\n                <i18n.Translate text=\"_SEND_\" />\n            </Button>\n        </div>\n    </Field.Section>\n</Form>" })
                    )
                ),
                _react2.default.createElement(
                    _section2.default,
                    null,
                    _react2.default.createElement(
                        "h3",
                        null,
                        _react2.default.createElement(
                            "code",
                            null,
                            "Field.Password"
                        ),
                        " ",
                        _react2.default.createElement(
                            _label2.default,
                            { scale: 0.8, color: "warning" },
                            _react2.default.createElement(_i18n2.default.Translate, { text: "_COMPONENT_LABEL_TEXT_" })
                        )
                    ),
                    _react2.default.createElement(
                        _section2.default,
                        null,
                        _react2.default.createElement(
                            "div",
                            null,
                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FIELD_COMP_PASSWORD_INTRO_" })
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: _styles2.default.tableContainer },
                            _react2.default.createElement(
                                "table",
                                { className: _styles2.default.propsTable },
                                _react2.default.createElement(
                                    "thead",
                                    null,
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_PROPERTY_TH_" })
                                        ),
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_TYPE_TH_" })
                                        ),
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_DEFAULT_TH_" })
                                        ),
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_DESCRIPTION_TH_" })
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    "tbody",
                                    null,
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "allowUnmask"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "bool"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "true"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FIELD_COMP_PASSWORD_PROP_ALLOWUNMASK_DESCRIPTION_" })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "unmaskLabel"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "string"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "UNMASK"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FIELD_COMP_PASSWORD_PROP_UNMASKLABEL_DESCRIPTION_" })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "maskLabel"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "string"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "MASK"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FIELD_COMP_PASSWORD_PROP_MASKLABEL_DESCRIPTION_" })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "showStrength"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "bool"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "true"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FIELD_COMP_PASSWORD_PROP_SHOWSTRENGTH_DESCRIPTION_" })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "maskChar"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "string"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "\u2022"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FIELD_COMP_PASSWORD_PROP_MASKCHAR_DESCRIPTION_" })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "maskTimout"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "number"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "1000"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FIELD_COMP_PASSWORD_PROP_MASKTIMEOUT_DESCRIPTION_" })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "evalStrength"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "func"
                                        ),
                                        _react2.default.createElement("td", null),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FIELD_COMP_PASSWORD_PROP_EVALSTRENGTH_DESCRIPTION_" })
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _section2.default,
                        null,
                        _react2.default.createElement(
                            "h6",
                            null,
                            _react2.default.createElement(_i18n2.default.Translate, { text: "_CODE_EXAMPLE_SECTION_TITLE_" })
                        ),
                        _react2.default.createElement(_code2.default, { lang: "jsx",
                            value: "<Field.Section>\n    <Text scale={0.8}>\n        <i18n.Translate text=\"_PASSWORD_FIELD_LABEL_\" />\n    </Text>\n\n    <Field.Password\n        name=\"password\"\n        placeholder=\"_PASSWORD_FIELD_PLACEHOLDER_\"\n        unmaskLabel=\"_UNMASK_PASSWORD_LABEL\"\n        maskLabel=\"_MASK_PASSWORD_LABEL\"\n        scale={1.5}\n        validators=\"$required\"/>\n</Field.Section>" })
                    ),
                    _react2.default.createElement(
                        _section2.default,
                        null,
                        _react2.default.createElement(
                            "h6",
                            null,
                            _react2.default.createElement(_i18n2.default.Translate, { text: "_CODE_EXAMPLE_RESULT_SECTION_TITLE_" })
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: _styles2.default.resultBox },
                            _react2.default.createElement(
                                _form2.default,
                                {
                                    onSubmit: function onSubmit() {} },
                                _react2.default.createElement(
                                    _field2.default.Section,
                                    null,
                                    _react2.default.createElement(
                                        _text2.default,
                                        { scale: 0.8 },
                                        _react2.default.createElement(_i18n2.default.Translate, { text: "_PASSWORD_FIELD_LABEL_" })
                                    ),
                                    _react2.default.createElement(_field2.default.Password, {
                                        name: "password",
                                        placeholder: "_PASSWORD_FIELD_PLACEHOLDER_",
                                        unmaskLabel: "_UNMASK_PASSWORD_LABEL_",
                                        maskLabel: "_MASK_PASSWORD_LABEL_",
                                        scale: 1.5,
                                        validators: "$required" })
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    _section2.default,
                    null,
                    _react2.default.createElement(
                        "h3",
                        null,
                        _react2.default.createElement(
                            "code",
                            null,
                            "Field.Select"
                        ),
                        " ",
                        _react2.default.createElement(
                            _label2.default,
                            { scale: 0.8, color: "warning" },
                            _react2.default.createElement(_i18n2.default.Translate, { text: "_COMPONENT_LABEL_TEXT_" })
                        )
                    ),
                    _react2.default.createElement(
                        _section2.default,
                        null,
                        _react2.default.createElement(
                            "div",
                            null,
                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FIELD_COMP_SELECT_INTRO_" })
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: _styles2.default.tableContainer },
                            _react2.default.createElement(
                                "table",
                                { className: _styles2.default.propsTable },
                                _react2.default.createElement(
                                    "thead",
                                    null,
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_PROPERTY_TH_" })
                                        ),
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_TYPE_TH_" })
                                        ),
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_DEFAULT_TH_" })
                                        ),
                                        _react2.default.createElement(
                                            "th",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_PROP_TABLE_DESCRIPTION_TH_" })
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    "tbody",
                                    null,
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "value"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "string,array"
                                        ),
                                        _react2.default.createElement("td", null),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FIELD_COMP_SELECT_PROP_VALUE_DESCRIPTION_" })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "options"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "array"
                                        ),
                                        _react2.default.createElement("td", null),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FIELD_COMP_SELECT_PROP_OPTIONS_DESCRIPTION_" })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "loading"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "bool"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "false"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FIELD_COMP_SELECT_PROP_LOADING_DESCRIPTION_" })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "loadingLabel"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "string"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            { style: { whiteSpace: "nowrap" } },
                                            "Loading ..."
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FIELD_COMP_SELECT_PROP_LOADINGLABEL_DESCRIPTION_" })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "loadOptions"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "func"
                                        ),
                                        _react2.default.createElement("td", null),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FIELD_COMP_SELECT_PROP_LOADOPTIONS_DESCRIPTION_" })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "loadOptionsTimeout"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "number"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "500"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FIELD_COMP_SELECT_PROP_LOADOPTIONSTIMEOUT_DESCRIPTION_" })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "noOptionsLabel"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "string"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "No options were found."
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FIELD_COMP_SELECT_PROP_NOOPTIONSLABEL_DESCRIPTION_" })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "multi"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "bool"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "false"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FIELD_COMP_SELECT_PROP_MULTI_DESCRIPTION_" })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "creatable"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "bool"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "false"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FIELD_COMP_SELECT_PROP_CREATABLE_DESCRIPTION_" })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "createOptionLabel"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "string"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "Create option {{value}}"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FIELD_COMP_SELECT_PROP_CREATEOPTIONLABEL_DESCRIPTION_" })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "onCreateOption"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "func"
                                        ),
                                        _react2.default.createElement("td", null),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FIELD_COMP_SELECT_PROP_ONCREATEOPTION_DESCRIPTION_" })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "createOptionAsync"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "bool"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "false"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FIELD_COMP_SELECT_PROP_CREATEOPTIONASYNC_DESCRIPTION_" })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "selectOptionAfterCreate"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "bool"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "true"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FIELD_COMP_SELECT_PROP_SELECTOPTIONAFTERCREATE_DESCRIPTION_" })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "searchable"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "bool"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "true"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FIELD_COMP_SELECT_PROP_SEARCHABLE_DESCRIPTION_" })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "placeholder"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "string"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            { style: { whiteSpace: "nowrap" } },
                                            "-- select --"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FIELD_COMP_SELECT_PROP_PLACEHOLDER_DESCRIPTION_" })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "openMenuOnSearchFocus"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "bool"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "true"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FIELD_COMP_SELECT_PROP_OPENMENUONSEARCHFOCUS_DESCRIPTION_" })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "clearSearchOnBlur"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "bool"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "true"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FIELD_COMP_SELECT_PROP_CLEARSEARCHONBLUR_DESCRIPTION_" })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "clearSearchOnMenuClose"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "bool"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "true"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FIELD_COMP_SELECT_PROP_CLEARSEARCHONMENUCLOSE_DESCRIPTION_" })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "labelMatchHighlight"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "bool"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "true"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FIELD_COMP_SELECT_PROP_LABELMATCHHIGHLIGHT_DESCRIPTION_" })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "tr",
                                        null,
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "onMenuClose"
                                        ),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            "func"
                                        ),
                                        _react2.default.createElement("td", null),
                                        _react2.default.createElement(
                                            "td",
                                            null,
                                            _react2.default.createElement(_i18n2.default.Translate, { text: "_SECTION_FIELD_COMP_SELECT_PROP_ONMENUCLOSE_DESCRIPTION_" })
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _section2.default,
                        null,
                        _react2.default.createElement(
                            "h6",
                            null,
                            _react2.default.createElement(_i18n2.default.Translate, { text: "_CODE_EXAMPLE_SECTION_TITLE_" }),
                            " - ",
                            _react2.default.createElement(_i18n2.default.Translate, { text: "_CODE_EXAMPLE_SECTION_TITLE_MULTI_SELECT_" })
                        ),
                        _react2.default.createElement(_code2.default, { lang: "jsx",
                            value: "<Field.Section>\n    <Text scale={0.8}>\n        <i18n.Translate text=\"_SELECT_FIELD_LABEL_\" />\n    </Text>\n    <Field.Select name=\"selectTest\"\n        value={this.state.selectValue}\n        onChange={(value) => {\n            this.setState({selectValue: value});\n        }}\n        options={this.state.options}\n        loadOptions={(searchValue) => {\n            this.setState({loadingOptions: true});\n\n            setTimeout(() => {\n                let originalOptions = this.originalOptions;\n\n                // Filter out based on search value.\n                let options = lodash.filter(originalOptions, (option) => {\n                    if(searchValue && option.label.indexOf(searchValue) < 0) {\n                        return false;\n                    }\n\n                    return true;\n                });\n\n                // First option is an action that shows the modal.\n                options.unshift({\n                    value: \"show_modal_action\",\n                    label: \"_SHOW_MODAL_ACTION_LABEL_\",\n                    action: () => {\n                        this.setState({isModalOpen: true});\n                    }\n                });\n\n                this.setState({\n                    options: options,\n                    loadingOptions: false\n                });\n            }, 2000);\n        }}\n        loading={this.state.loadingOptions}\n        onMenuClose={() => {\n            this.setState({options: null});\n        }}\n        creatable={true}\n        multi={true}\n        size={1.5}\n        onCreateOption={(value) => {\n            let options = this.state.options.concat([{\n                value: value,\n                label: value\n            }]);\n\n            this.setState({\n                options: options\n            });\n        }}\n        loaderComponent={<Spinner.CircSide color=\"#555\" />}\n        validators=\"$required\">\n    </Field.Select>\n</Field.Section>" })
                    ),
                    _react2.default.createElement(
                        _section2.default,
                        null,
                        _react2.default.createElement(
                            "h6",
                            null,
                            _react2.default.createElement(_i18n2.default.Translate, { text: "_CODE_EXAMPLE_RESULT_SECTION_TITLE_" })
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: _styles2.default.resultBox },
                            _react2.default.createElement(
                                _field2.default.Section,
                                null,
                                _react2.default.createElement(
                                    _text2.default,
                                    { scale: 0.8 },
                                    _react2.default.createElement(_i18n2.default.Translate, { text: "_SELECT_FIELD_LABEL_" })
                                ),
                                _react2.default.createElement(_field2.default.Select, {
                                    name: "selectTest",
                                    value: this.state.selectValue,
                                    onChange: function onChange(value) {
                                        _this5.setState({ selectValue: value });
                                    },
                                    options: this.state.options,
                                    loadOptions: function loadOptions(searchValue) {
                                        _this5.setState({ loadingOptions: true });

                                        setTimeout(function () {
                                            var originalOptions = _this5.originalOptions;

                                            // Filter out based on search value.
                                            var options = _lodash2.default.filter(originalOptions, function (option) {
                                                if (searchValue && option.label.indexOf(searchValue) < 0) {
                                                    return false;
                                                }

                                                return true;
                                            });

                                            // First option is an action that shows the modal.
                                            options.unshift(_this5.actionOption);

                                            _this5.setState({
                                                options: options,
                                                loadingOptions: false
                                            });
                                        }, 2000);
                                    },
                                    loading: this.state.loadingOptions,
                                    onMenuClose: function onMenuClose() {
                                        _this5.setState({ options: null });
                                    },
                                    creatable: true,
                                    multi: true,
                                    scale: 1.5,
                                    onCreateOption: function onCreateOption(value) {
                                        var options = _this5.state.options.concat([{
                                            value: value,
                                            label: value
                                        }]);

                                        _this5.setState({
                                            options: options
                                        });
                                    },
                                    loaderComponent: _react2.default.createElement(_spinner2.default.CircSide, { color: "#555" }),
                                    validators: "$required" })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        _section2.default,
                        null,
                        _react2.default.createElement(
                            "h6",
                            null,
                            _react2.default.createElement(_i18n2.default.Translate, { text: "_CODE_EXAMPLE_SECTION_TITLE_" }),
                            " - ",
                            _react2.default.createElement(_i18n2.default.Translate, { text: "_CODE_EXAMPLE_SECTION_TITLE_SINGLE_SELECT_" })
                        ),
                        _react2.default.createElement(_code2.default, { lang: "jsx",
                            value: "<Field.Section>\n    <Text scale={0.8}>\n        <i18n.Translate text=\"_SELECT_FIELD_LABEL_\" />\n    </Text>\n    <Field.Select name=\"selectTest\"\n        value={this.state.selectValue}\n        onChange={(value) => {\n            this.setState({selectValue: value});\n        }}\n        options={this.state.options}\n        loadOptions={(searchValue) => {\n            this.setState({loadingOptions: true});\n\n            setTimeout(() => {\n                let originalOptions = this.originalOptions;\n\n                // Filter out based on search value.\n                let options = lodash.filter(originalOptions, (option) => {\n                    if(searchValue && option.label.indexOf(searchValue) < 0) {\n                        return false;\n                    }\n\n                    return true;\n                });\n\n                // First option is an action that shows the modal.\n                options.unshift({\n                    value: \"show_modal_action\",\n                    label: \"_SHOW_MODAL_ACTION_LABEL_\",\n                    action: () => {\n                        this.setState({isModalOpen: true});\n                    }\n                });\n\n                this.setState({\n                    options: options,\n                    loadingOptions: false\n                });\n            }, 2000);\n        }}\n        loading={this.state.loadingOptions}\n        onMenuClose={() => {\n            this.setState({options: null});\n        }}\n        creatable={true}\n        multi={false}\n        size={1.5}\n        onCreateOption={(value) => {\n            let options = this.state.options.concat([{\n                value: value,\n                label: value\n            }]);\n\n            this.setState({\n                options: options\n            });\n        }}\n        loaderComponent={<Spinner.CircSide color=\"#555\" />}\n        validators=\"$required\">\n    </Field.Select>\n</Field.Section>" })
                    ),
                    _react2.default.createElement(
                        _section2.default,
                        null,
                        _react2.default.createElement(
                            "h6",
                            null,
                            _react2.default.createElement(_i18n2.default.Translate, { text: "_CODE_EXAMPLE_RESULT_SECTION_TITLE_" })
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: _styles2.default.resultBox },
                            _react2.default.createElement(
                                _field2.default.Section,
                                null,
                                _react2.default.createElement(
                                    _text2.default,
                                    { scale: 0.8 },
                                    _react2.default.createElement(_i18n2.default.Translate, { text: "_SELECT_FIELD_LABEL_" })
                                ),
                                _react2.default.createElement(_field2.default.Select, {
                                    name: "selectTest",
                                    value: this.state.selectValue,
                                    onChange: function onChange(value) {
                                        _this5.setState({ selectValue: value });
                                    },
                                    options: this.state.options,
                                    loadOptions: function loadOptions(searchValue) {
                                        _this5.setState({ loadingOptions: true });

                                        setTimeout(function () {
                                            var originalOptions = _this5.originalOptions;

                                            // Filter out based on search value.
                                            var options = _lodash2.default.filter(originalOptions, function (option) {
                                                if (searchValue && option.label.indexOf(searchValue) < 0) {
                                                    return false;
                                                }

                                                return true;
                                            });

                                            // First option is an action that shows the modal.
                                            options.unshift(_this5.actionOption);

                                            _this5.setState({
                                                options: options,
                                                loadingOptions: false
                                            });
                                        }, 2000);
                                    },
                                    loading: this.state.loadingOptions,
                                    onMenuClose: function onMenuClose() {
                                        _this5.setState({ options: null });
                                    },
                                    creatable: true,
                                    multi: false,
                                    scale: 1.5,
                                    onCreateOption: function onCreateOption(value) {
                                        var options = _this5.state.options.concat([{
                                            value: value,
                                            label: value
                                        }]);

                                        _this5.setState({
                                            options: options
                                        });
                                    },
                                    loaderComponent: _react2.default.createElement(_spinner2.default.CircSide, { color: "#555" }),
                                    validators: "$required" })
                            )
                        )
                    )
                )
            );
        }

        /**
         * This function is responsible for generating the component's view.
         */

    }, {
        key: "render",
        value: function render() {
            var _this6 = this;

            return _react2.default.createElement(
                "div",
                { className: _styles2.default.landingRebelt },
                _react2.default.createElement(
                    _bar2.default,
                    { fixedOnTop: true, open: this.state.barOpen, onToggle: function onToggle() {
                            _this6.setState({ barOpen: !_this6.state.barOpen });
                        } },
                    _react2.default.createElement(
                        _bar2.default.Container,
                        { withBottomLine: true },
                        _react2.default.createElement(
                            _bar2.default.Header,
                            null,
                            _react2.default.createElement(
                                _bar2.default.Menu,
                                { togglable: false },
                                _react2.default.createElement(
                                    _bar2.default.Item,
                                    null,
                                    _react2.default.createElement(
                                        _reactRouter.Link,
                                        { to: "/a" },
                                        _react2.default.createElement("img", { className: _styles2.default.logo, src: _logo_icon2.default })
                                    )
                                )
                            ),
                            _react2.default.createElement(_bar2.default.Toggle, {
                                openComponent: _react2.default.createElement("span", { className: "icon-menu" }),
                                closeComponent: _react2.default.createElement("span", { className: "icon-delete" }) })
                        ),
                        _react2.default.createElement(
                            _bar2.default.Body,
                            null,
                            _react2.default.createElement(
                                _bar2.default.Menu,
                                null,
                                _react2.default.createElement(
                                    _bar2.default.Item,
                                    null,
                                    _react2.default.createElement(
                                        "a",
                                        { href: "https://github.com/nosebit/darch" },
                                        "GitHub"
                                    )
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    _container2.default,
                    null,
                    _react2.default.createElement(
                        "h1",
                        null,
                        _react2.default.createElement(_i18n2.default.Translate, { text: "_MAIN_TITLE_" })
                    ),
                    _react2.default.createElement(
                        "p",
                        null,
                        _react2.default.createElement(_i18n2.default.Translate, { text: "_INTRO_" })
                    ),
                    this.renderUsageSection(),
                    this.renderGridSection(),
                    this.renderBarSection(),
                    this.renderFormSection(),
                    this.renderFieldSection()
                )
            );
        }
    }]);

    return Component;
}(_react2.default.Component);

/*

 */


Component.displayName = "app.home";
Component.defaultProps = {};
Component.propTypes = {};
exports.default = Component;
module.exports = exports["default"];

/***/ }),

/***/ 1368:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)();
// imports


// module
exports.push([module.i, "._3IsaC {\n  padding-bottom: 100pt;\n}\n._1riUl {\n  height: 40px;\n}\n._2Kcqg {\n  margin-bottom: 20pt;\n  padding: 10pt;\n  background: #f5f5f5;\n}\n.Zx4o5 {\n  display: inline-block;\n  margin-left: 10pt;\n  margin-bottom: 10pt;\n}\n._2lzFl + ._2lzFl {\n  margin-top: 20pt;\n}\n._1yxR- {\n  font-family: \"Raleway\", \"Helvetica Nue\", Helvetica, Arial, sans-serif;\n  font-weight: 200;\n  line-height: 1.5;\n  font-size: 63px;\n  font-weight: 400;\n  margin: 144px 0 54px 0;\n}\ndiv + ._2aE8s {\n  margin-top: 20pt;\n}\n@media (max-width: 767px) {\n  ._2aE8s {\n    overflow-x: scroll;\n    border: 1px solid #ddd;\n  }\n}\n._1vv70 th,\n._1kxSB th,\n.x0AHG th,\n._1vv70 td,\n._1kxSB td,\n.x0AHG td {\n  vertical-align: top;\n}\n@media (max-width: 767px) {\n  ._1vv70,\n  ._1kxSB,\n  .x0AHG {\n    min-width: 1000pt;\n  }\n}\n._3iejn {\n  padding: 2em;\n  border: 1pt dashed #999;\n}\n._3z1rl,\n.iiFS1 {\n  margin: 30pt 0;\n}\n", "", {"version":3,"sources":["/home/marco/Jabba/Projects/Personal/portfolio/src/app/home/src/app/home/styles.styl","/home/marco/Jabba/Projects/Personal/portfolio/src/app/home/styles.styl","/home/marco/Jabba/Projects/Personal/portfolio/src/app/home/darch/src/styles/text.styl","/home/marco/Jabba/Projects/Personal/portfolio/src/app/home/darch/src/styles/table.styl"],"names":[],"mappings":"AAIA;EACI,sBAAA;CCQH;ADND;EACI,aAAA;CCQH;ADND;EACI,oBAAA;EACA,cAAA;EACA,oBAAA;CCQH;ADND;EACI,sBAAA;EACA,kBAAA;EACA,oBAAA;CCQH;ADND;EACI,iBAAA;CCQH;ADND;EEPI,sEAAA;EACA,iBAAA;EACA,iBAAA;EAIA,gBAAA;EACA,iBAAA;EACA,uBAAA;CDaH;ADXD;EACI,iBAAA;CCaH;AErCuC;EAAA;IAChC,mBAAA;IACA,uBAAA;GFwCL;CACF;ADXG;;;;;;EACI,oBAAA;CCkBP;ADhBuC;EAAA;;;IAChC,kBAAA;GCqBL;CACF;ADpBD;EACI,aAAA;EACA,wBAAA;CCsBH;ADpBD;;EAEI,eAAA;CCsBH","file":"styles.styl","sourcesContent":["@require \"~darch/src/styles/variables\"\n@require \"~darch/src/styles/text\"\n@require \"~darch/src/styles/table\"\n\n.landing-rebelt\n    padding-bottom: 100pt;\n\n.logo\n    height: ($bar-height - 20pt);\n\n.box\n    margin-bottom: 20pt;\n    padding: 10pt;\n    background: #f5f5f5;\n\n.h-space\n    display: inline-block;\n    margin-left: 10pt;\n    margin-bottom: 10pt;\n\n.subsection + .subsection\n    margin-top: 20pt\n\n.title\n    h1();\n\ndiv + .table-container\n    margin-top: 20pt;\n    \n.table-container\n    tableContainer()\n\n.props-table,\n.default-validators-table,\n.custom-validators-table\n    th,td\n        vertical-align: top;\n    \n    @media (max-width: $screen-phone-max)\n        min-width: 1000pt;\n\n.result-box\n    padding: 2em;\n    border: 1pt dashed #999;\n    \n.callout-container,\n.code-container\n    margin: 30pt 0;","@value baseUnit px;\n@value textSize 18;\n@value colorLight #fff;\n@value colorDark #424242;\n@value colorPositive #4183d7;\n@value colorMoody #397cac;\n@value colorCalm #26c6da;\n@value colorStable #c6ccd2;\n@value colorSuccess #26a65b;\n@value colorWarning #f2b420;\n@value colorDanger #ed4545;\n.landing-rebelt {\n  padding-bottom: 100pt;\n}\n.logo {\n  height: 40px;\n}\n.box {\n  margin-bottom: 20pt;\n  padding: 10pt;\n  background: #f5f5f5;\n}\n.h-space {\n  display: inline-block;\n  margin-left: 10pt;\n  margin-bottom: 10pt;\n}\n.subsection + .subsection {\n  margin-top: 20pt;\n}\n.title {\n  font-family: \"Raleway\", \"Helvetica Nue\", Helvetica, Arial, sans-serif;\n  font-weight: 200;\n  line-height: 1.5;\n  font-size: 63px;\n  font-weight: 400;\n  margin: 144px 0 54px 0;\n}\ndiv + .table-container {\n  margin-top: 20pt;\n}\n@media (max-width: 767px) {\n  .table-container {\n    overflow-x: scroll;\n    border: 1px solid #ddd;\n  }\n}\n.props-table th,\n.default-validators-table th,\n.custom-validators-table th,\n.props-table td,\n.default-validators-table td,\n.custom-validators-table td {\n  vertical-align: top;\n}\n@media (max-width: 767px) {\n  .props-table,\n  .default-validators-table,\n  .custom-validators-table {\n    min-width: 1000pt;\n  }\n}\n.result-box {\n  padding: 2em;\n  border: 1pt dashed #999;\n}\n.callout-container,\n.code-container {\n  margin: 30pt 0;\n}\n","$inc = 0.2em;\n\ntext-font()\n    font-family: $text-family;\n    font-size: $text-size;\n    font-weight: $text-weight;\n    text-align: $text-align;\n    line-height: $text-line-height;\n\n    // Force components to inherit text styles\n    input, select, textarea, button\n        font-family: inherit;\n        font-size: inherit;\n        font-weight: inherit;\n\nh-base()\n    font-family: $text-family;\n    font-weight: $text-weight;\n    line-height: $text-line-height;\n\nh1()\n    h-base()\n    font-size: 3.5*$text-size;\n    font-weight: 2*$text-weight;\n    margin: 8*$text-size 0 3*$text-size 0;\nh2()\n    h-base()\n    font-size: 2.5*$text-size;\n    margin: 4*$text-size 0 2*$text-size 0;\n    font-weight: 2*$text-weight;\nh3()\n    h-base()\n    font-size: 1.5*$text-size;\n    margin: 3*$text-size 0 1.5*$text-size 0;\n    font-weight: 2*$text-weight;\nh4()\n    h-base()\n    font-size: 1.2*$text-size;\n    margin: 2*$text-size 0 1*$text-size 0;\n    font-weight: 2*$text-weight;\nh5()\n    h-base()\n    font-size: 1.1*$text-size;\n    margin: 2*$text-size 0 0.6*$text-size 0;\n    font-weight: 2*$text-weight;\nh6()\n    h-base()\n    font-size: 1*$text-size;\n    margin: 2*$text-size 0 0.3*$text-size 0;\n    font-weight: 3*$text-weight !important;\n\nheading()\n    h1\n        h1()\n    h2\n        h2()\n    h3\n        h3()\n    h4\n        h4()\n    h5\n        h5()\n    h6\n        h6()\n\n    :global(.headline)\n        padding-bottom: 0.2em;\n        border-bottom: 1px solid #ddd;\n\nparagraph()\n    p\n        margin: 0;\n        padding: 0;\n    p + p\n        margin-top: 1em;\n\ncode()\n    code:not(:global(.prism))\n        background: #f3f3f3;\n        padding: 0.1em 0.2em;\n        color: #d64541;\n        border-radius: 0.1em;\n\nlink()\n    a\n        color: #1E8BC3;\n        \n        &:hover\n            color: darken(#1E8BC3, 10%)\n\nalign()\n    :global(.text-left)\n        text-align: left;\n    :global(.text-center)\n        text-align: center;\n    :global(.text-right)\n        text-align: right;\n\ntext-main()\n    text-font();\n    code();\n    heading();\n    paragraph();\n    align();\n    link();\n","@require \"./variables\"\n\ntableContainer()\n    @media (max-width: $screen-phone-max)\n        overflow-x: scroll;\n        border: 1px solid #ddd;\n        \n\ntable-main()\n    :global(.table-container)\n        tableContainer();\n\n    table\n        border-collapse: collapse;\n        vertical-align: middle;\n        width: 100%;\n        \n        /*@media (min-width: $screen-tablet-min)\n            width: 100%;*/\n\n        th,td\n            padding: 1em;\n        \n        th\n            font-weight: 3*$text-weight;\n        \n        thead\n            tr:first-child\n                th\n                    border-top: 3px solid #eee;\n            tr:last-child\n                th\n                    border-bottom: 1px solid #ddd;\n        \n        tbody\n            tr:last-child\n                td\n                    border-bottom: 3px solid #eee;"],"sourceRoot":""}]);

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
	"landing-rebelt": "_3IsaC",
	"landingRebelt": "_3IsaC",
	"logo": "_1riUl",
	"box": "_2Kcqg",
	"h-space": "Zx4o5",
	"hSpace": "Zx4o5",
	"subsection": "_2lzFl",
	"title": "_1yxR-",
	"table-container": "_2aE8s",
	"tableContainer": "_2aE8s",
	"props-table": "_1vv70",
	"propsTable": "_1vv70",
	"default-validators-table": "_1kxSB",
	"defaultValidatorsTable": "_1kxSB",
	"custom-validators-table": "x0AHG",
	"customValidatorsTable": "x0AHG",
	"result-box": "_3iejn",
	"resultBox": "_3iejn",
	"callout-container": "_3z1rl",
	"calloutContainer": "_3z1rl",
	"code-container": "iiFS1",
	"codeContainer": "iiFS1"
};

/***/ }),

/***/ 1370:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1368);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"modules\":true,\"sourceMap\":true,\"camelCase\":true,\"localIdentName\":\"[hash:base64:5]\"}!../../../node_modules/stylus-loader/index.js?{\"preferPathResolver\":\"webpack\"}!./styles.styl", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js?{\"modules\":true,\"sourceMap\":true,\"camelCase\":true,\"localIdentName\":\"[hash:base64:5]\"}!../../../node_modules/stylus-loader/index.js?{\"preferPathResolver\":\"webpack\"}!./styles.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1372:
/***/ (function(module, exports) {

module.exports = "/assets/images/logo_icon.png";

/***/ })

});
//# sourceMappingURL=ec9f804e6c76ec2faf35.js.map