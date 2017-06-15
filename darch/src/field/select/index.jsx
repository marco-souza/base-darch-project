import React from "react";
import classNames from "classnames";
import lodash from "lodash";
import {findDOMNode} from "react-dom";
import contains from "dom-helpers/query/contains";
import {LoggerFactory} from "darch/src/utils";
import i18n from "darch/src/i18n";
import Spinner from "darch/src/spinner";
import AutosizeInput from "react-input-autosize";
import styles from "./styles";
import {OptionType} from "./types";
import Value from "./value";

let Logger = new LoggerFactory("field.select", {level:"error"});

/**
 * Main component class.
 */
export default class Component extends React.Component {
    /** React properties **/
    static displayName = "field.select";
    static defaultProps = {
        loading: false,
        loadingLabel: "Loading ...",
        loadOptionsTimeout: 500,
        noOptionsLabel: "No options were found.",
        multi: false,
        creatable: false,
        createOptionLabel: "Create option \"{{value}}\"",
        onCreateOption: () => {},
        onMenuClose: () => {},
        createOptionAsync: false,
        selectOptionAfterCreate: true,
        searchable: true,
        placeholder: "-- select --",
        openMenuOnSearchFocus: true,
        clearSearchOnBlur: true,
        clearSearchOnMenuClose: true,
        clearSearchOnSelect: false,
        labelMatchHighlight: true
    };
    static propTypes = {
        value: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.arrayOf(React.PropTypes.string)
        ]),
        options: OptionType,
        loading: React.PropTypes.bool,
        loadingLabel: React.PropTypes.string,
        loadDefaultOptions: React.PropTypes.func,
        loadOptions: React.PropTypes.func,
        loadMoreOptions: React.PropTypes.func,
        loadOptionsTimeout: React.PropTypes.number,
        noOptionsLabel: React.PropTypes.string,
        multi: React.PropTypes.bool,
        creatable: React.PropTypes.bool,
        createOptionLabel: React.PropTypes.string,
        onCreateOption: React.PropTypes.func,
        onMenuClose: React.PropTypes.func,
        createOptionAsync: React.PropTypes.bool,
        selectOptionAfterCreate: React.PropTypes.bool,
        searchable: React.PropTypes.bool,
        placeholder: React.PropTypes.string,
        openMenuOnSearchFocus: React.PropTypes.bool,
        clearSearchOnBlur: React.PropTypes.bool,
        clearSearchOnMenuClose: React.PropTypes.bool,
        clearSearchOnSelect: React.PropTypes.bool,
        labelMatchHighlight: React.PropTypes.bool
    };

    /** Instance properties **/
    state = {
        searchValue: "",
        isSearchFocused: false,
        isMenuOpen: false
    };

    createOptionAction = {
        value: "__create_option",    // This should be a unique hash
        label: this.props.createOptionLabel,
        action: (value) => {
            return Promise.resolve(this.props.onCreateOption(value))
            .then((option) => {
                if(this.props.selectOptionAfterCreate) {
                    this.selectOption(option);
                }
            });
        },
        preventSearchBlurOnComplete: true,
        preventLabelMatchHighlight: true,
        async: this.props.createOptionAsync
    };

    // Store selected options to enable user mutate options
    // (eliminating options which values are selected).
    selectedOptionsMap = {};

    /**
     * LYFECICLE : This function is called when component
     * got mounted in the view.
     */
    componentDidMount() {
        let logger = Logger.create("componentDidMount");
        logger.info("enter", {loading: this.props.loading});

        document.addEventListener("click", this.onDocumentClick, false);
        document.addEventListener("touchend", this.onDocumentClick, false);
    }

    /**
     * LYFECICLE : This function is called when component
     * going to be unmounted from the view.
     */
    componentWillUnmount() {
        let logger = Logger.create("componentWillUnmount");
        logger.info("enter");

        document.removeEventListener("click", this.onDocumentClick, false);
        document.removeEventListener("touchend", this.onDocumentClick, false);
    }

    /**
     * LIFECYCLE
     */
    componentDidUpdate() {
        let logger = Logger.create("componentDidUpdate");
        logger.info("enter");

        if(this._optionToFocusAfterSelect) {
            let optionToFocusAfterSelect = this._optionToFocusAfterSelect;
            this._optionToFocusAfterSelect = null;

            this.focusOption(optionToFocusAfterSelect);
        }

        if(this._scrollToFocusedNode
        && this.focusedOptionRef
        && this.menuRef) {
            this._scrollToFocusedNode = false;

            // Scroll to focused option.
            let focusedNode = findDOMNode(this.focusedOptionRef);
            let menuNode = findDOMNode(this.menuRef);
            let focusedRect = focusedNode.getBoundingClientRect();
            let menuRect = menuNode.getBoundingClientRect();

            if (focusedRect.bottom > menuRect.bottom || focusedRect.top < menuRect.top) {
                menuNode.scrollTop = (focusedNode.offsetTop + focusedNode.clientHeight - menuNode.offsetHeight);
            }
        }
    }

    /**
     * This function filter menu options based on what
     * user written down into input.
     */
    filterOptions() {
        let logger = Logger.create("filterOptions");
        let {multi,value,options} = this.props;
        let {searchValue} = this.state;
        let isEmptySearch = lodash.isEmpty(searchValue);

        logger.info("enter", {
            searchValue: searchValue
        });

        // Remove already selected options.
        return options ? lodash.filter(options, (option) => {
            // Manual options filter if and only if user does not
            // have provided a loadOption method (which should filter
            // out options by it's own).
            if(!this.props.loadOptions
            && !isEmptySearch
            && option.label.indexOf(searchValue) < 0) {
                return false;
            }

            // Options should not expose already selected values
            // in multi scenario. We do this filtering here (and not
            // leaving it to loadOptions method) because,
            // in general, user does not has access to values within
            // form component (exposed only on submit).
            //
            // @TODO : Allow user select same value multiple times.
            return multi ?
                (value||[]).indexOf(option.value) < 0 :
                true;
        }) : null;
    }

    /**
     * This function process options.
     */
    processOptions() {
        if(this.props.loading) {return this.visibleOptions;}

        let {creatable} = this.props;
        let {searchValue} = this.state;
        let options = this.filterOptions();

        // If no options was filtered, then return nothing.
        if(!options){return;}

        // Group custom actions.
        let customActions = [];

        // Add create option as custom action when
        // no option is available and user entered something
        // as input value.
        if(creatable
        && !options.length
        && !lodash.isEmpty(searchValue)) {
            customActions.push(this.createOptionAction);
        }

        // Update visible options with the concat of
        // filteredOptions and custom actions.
        options = options.concat(customActions);

        // Return processed options.
        return options;
    }

    /**
     * This function selects a value.
     */
    selectValue(value, option) {
        let logger = Logger.create("selectValue");
        logger.info("enter", {value});

        let newState = {
            // Remove search value only in single value scenario,
            // because in multi scenario the menu stays open to
            // user select more values.
            searchValue: this.props.multi&&!this.props.clearSearchOnSelect?
                this.state.searchValue :
                "",
            isMenuOpen: !this.props.multi?false:!this.props.clearSearchOnSelect
        };

        if(this.props.multi) {
            let values = !lodash.isEmpty(this.props.value)?
                lodash.flatten([this.props.value]):
                [];

            logger.debug("values", {values});

            values.push(value);
            values = lodash.uniq(values);
            value = values;

            logger.debug("new value", {value});
        }
        else {
            this.blurSearch();
        }

        this.setState(newState, () => {
            this.props.onChange(value, option);
        });
    }

    /**
     * This function runs an action option.
     */
    runActionOption(option) {
        if(!option||!option.action){return;}

        // Set new state.
        this.setState({
            isMenuOpen: false,
            focusedOption: null
        }, () => {
            this.props.onMenuClose();
        });

        // Run action
        Promise.resolve(option.action(
            this.state.searchValue
        )).then(() => {
            if(!option.preventSearchBlurOnComplete) {
                this.blurSearch();
            }
        });
    }

    /**
     * This function selects an option.
     */
    selectOption(option) {
        if(option.action) { this.runActionOption(option); }
        else {
            let {focusedOption} = this.state;
            let {multi} = this.props;

            // If we are selecting the current focusedOption
            // and we are in multi scenario, then get adjacent
            // option to set focus on.
            if(multi && focusedOption == option) {

                // @NOTE : Since focusedOption is an option in
                // visibleOptions array, then it's impossible
                // to get -1 as result of indexOf function.
                let idx = this.visibleOptions.indexOf(option)+1;

                // If we are selecting the last option, then we should
                // focus the option before it.
                if(idx > this.visibleOptions.length-1) { idx -= 2; }

                // The option before the last option could not exists
                // in the edge case where the last option is also the
                // first one (only one visible option).
                if(idx >= 0) {
                    this._optionToFocusAfterSelect = this.visibleOptions[idx];
                }
            }

            // Store option in selected options map.
            this.selectedOptionsMap[option.value] = option;

            // Select the option value.
            this.selectValue(option.value, option);
        }
    }

    /**
     * This function removes a valus in multi value select.
     */
    removeValue(value) {
        let logger = Logger.create("removeValue");
        logger.info("enter", {value});

        let values = this.props.value?
            lodash.flatten([this.props.value]) :
            [];

        values = lodash.without(values, value);
        logger.info("values", {values});

        // Remove associated option from selectedOptionsMap.
        delete this.selectedOptionsMap[value];

        this.props.onChange(values);
        this.focusSearch({preventOpenMenu: true});
    }

    /**
     * This function removes the last value.
     */
    popValue() {
        let logger = Logger.create("popValue");
        logger.info("enter");

        let values = this.props.value?
            lodash.flatten([this.props.value]) :
            [];

        values = lodash.dropRight(values);

        logger.info("values", {values});

        this.props.onChange(values);
    }

    /**
     * This function set focus on search input.
     */
    focusSearch({preventOpenMenu=false} = {}) {
        let logger = Logger.create("focusSearch");
        logger.info("enter");

        if (!this.searchInputRef) {
            logger.debug("there are no search input");
            return;
        }

        // Set focus on input.
        this.searchInputRef.focus();

        // Open menu after input focus.
        if(!preventOpenMenu && this.props.openMenuOnSearchFocus) {
            this.setState({isMenuOpen: true});
        }
    }

    /**
     * This function blur the search input.
     */
    blurSearch() {
        let logger = Logger.create("blurSearch");
        logger.info("enter");

        if (!this.searchInputRef) {
            logger.debug("there are no search input");
            return;
        }

        // Blur search input.
        this.searchInputRef.blur();

        // Update state.
        this.setState({
            isMenuOpen: false,
            focusedOption: null,
            options: null,
            searchValue: !this.props.clearSearchOnMenuClose?
                this.state.searchValue :
                ""
        },() => {
            this.props.onMenuClose();
        });
    }

    /**
     * This function focus an specific option.
     */
    focusOption(option) {
        let logger = Logger.create("focusOption");
        logger.info("enter", {option});

        this._scrollToFocusedNode = true;

        this.setState({
            focusedOption: option
        });
    }

    /**
     * This function set focus on the adjacent option.
     */
    focusAdjOption({direction="next"} = {}) {
        let logger = Logger.create("focusAdjOption");
        logger.info("enter", {direction});

        let {isMenuOpen} = this.state;

        // If menu is not opened yet, then opened it and
        // select the first available option (not filtered).
        if(!isMenuOpen) {
            logger.debug("menu closed");

            return this.setState({
                isMenuOpen: true,
                searchValue: "",
                focusedOption: this.visibleOptions&&this.visibleOptions.length?
                    this.visibleOptions[0]:
                    undefined
            });
        }

        // Return if does not have visible options.
        if(!this.visibleOptions||!this.visibleOptions.length){
            logger.debug("no visibleOptions");
            return;
        }

        // Get index of the current focused option.
        let {focusedOption} = this.state;
        let idx = focusedOption?
            this.visibleOptions.indexOf(focusedOption):
            -1;

        logger.debug("current focused option index", {idx});

        // Set index step based on direction.
        let step = 1;

        switch (direction) {
            case "prev":
                step = -1;
                break;
            default:
        }

        // Update index with step.
        idx += step;

        logger.debug("new focused option index", {idx});

        // Invalid new index
        if(idx < 0 || idx >= this.visibleOptions.length)  {
            logger.debug("new focused option index is INVALID");
            return;
        }

        logger.debug("new focused option index is VALID", {
            option: this.visibleOptions[idx]
        });

        this._scrollToFocusedNode = true;

        this.setState({
            focusedOption: this.visibleOptions[idx]
        });
    }

    /**
     * This function set focus on the next option.
     */
    focusNextOption() {
        let logger = Logger.create("focusNextOption");
        logger.info("enter");
        this.focusAdjOption({direction: "next"});
    }

    /**
     * This function set focus on the previous option.
     */
    focusPrevOption() {
        let logger = Logger.create("focusPrevOption");
        logger.info("enter");
        this.focusAdjOption({direction: "prev"});
    }

    /**
     * This function handles document click.
     */
    onDocumentClick(evt) {
        let logger = Logger.create("onDocumentClick");
        logger.info("enter");

        let selectContainsClickedElem = contains(
            findDOMNode(this),
            evt.target
        );

        if(!selectContainsClickedElem) {
            this.setState({
                isMenuOpen: false,
                options: null,
                focusedOption: null,
                searchValue: !this.props.clearSearchOnMenuClose?
                    this.state.searchValue :
                    ""
            }, () => {
                this.props.onMenuClose();
            });
        }
    }

    /**
     * This function handles search input focus.
     */
    onSearchFocus() {
        let logger = Logger.create("onSearchFocus");
        logger.info("enter");

        this.setState({isSearchFocused: true});
    }

    /**
     * This function handles search input blur.
     */
    onSearchBlur() {
        let logger = Logger.create("onSearchBlur");
        logger.info("enter");

        this.setState({
            isSearchFocused: false
        });
    }

    /**
     * This function handle search input change.
     */
    onSearchChange(evt) {
        let logger = Logger.create("onSearchChange");
        logger.info("enter", {value: evt.target.value});

        // @NOTE : We force menu open when no loadOptions was provided
        // to handle the case where user is removing multi values
        // (which triggers search input focus) and then insert a
        // search text. Upon this text insertion, menu should be open to
        // show results. When user provided a loadOptions, the we close
        // the menu to await user to load new options into the schene.
        this.setState({
            isMenuOpen: !this.props.loadOptions,
            searchValue: evt.target.value,
            focusedOption: !this.props.loadOptions?this.state.focusedOption:null
        }, () => {
            // Inquire user to renew option based on search query.
            if(!this.props.loadig
            && this.props.loadOptions
            && !lodash.isEmpty(this.state.searchValue)){
                if(this.loadOptionsTimer) {
                    clearTimeout(this.loadOptionsTimer);
                }

                // Start timer to load options.
                this.loadOptionsTimer = setTimeout(() => {
                    this.props.loadOptions(this.state.searchValue);
                    this.loadOptionsTimer = null;

                    // Force menu open.
                    this.setState({isMenuOpen: true});
                }, this.props.loadOptionsTimeout);
            }
        });
    }

    /**
     * This function handles mouse down event on select
     * control which should open the select menu and set
     * focus on the search input.
     */
    onControlMouseDown(evt) {
        if (this.props.disabled
        || (evt.type === "mousedown" && evt.button !== 0)
        || (evt.target.tagName === "INPUT")) {
            return;
        }

        // Prevent default
        evt.stopPropagation();
        evt.preventDefault();

        if(!this.props.searchable) {
            // Select is not searchable, then behave like normal
            // html select tag just toggling.
            return this.setState({
                isMenuOpen: !this.state.isMenuOpen,
                focusedOption: null
            });
        }

        // If search is focused, the we gonna clear search input
        // and ensure that open menu
        if(this.state.isSearchFocused) {
            this.focusSearch();

            let searchInput = this.searchInputRef;
            if (typeof searchInput.getInput === "function") {
                searchInput = searchInput.getInput();
            }

            searchInput.value = "";

            // Ensure that menu is open
            this.setState({isMenuOpen: true});
        }
        // otherwise, search is not focused... then focus it
        else {
            this.focusSearch();
        }
    }

    /**
     * This function handles key down events within select control.
     */
    onControlKeyDown(evt) {
        if(this.props.disabled){return;}

        let {searchValue,isMenuOpen,focusedOption} = this.state;

        switch (evt.keyCode) {
            // Backspace : remove last value.
            case 8:
                if(lodash.isEmpty(searchValue)) {
                    evt.preventDefault();
                    this.popValue();
                }
                break;

            // Enter : select focused option or run action.
            case 13:
                if(isMenuOpen && focusedOption){
                    evt.preventDefault();
                    evt.stopPropagation();
                    this.selectOption(focusedOption);
                }
                break;

            // Up : focus previous option.
            case 38:
                evt.preventDefault();
                evt.stopPropagation();
                this.focusPrevOption();
                break;

            // Down : focus next option.
            case 40:
                evt.preventDefault();
                evt.stopPropagation();
                this.focusNextOption();
                break;

            default:
                return;
        }
    }

    /**
     * This function handles mouse down on menu.
     */
    onMenuMouseDown(evt) {
        if (this.props.disabled || (evt.type === "mousedown" && evt.button !== 0)) {
            return;
        }

        evt.stopPropagation();
        evt.preventDefault();

        this.focusSearch();
    }

    /**
     * This function handles
     */

    /**
     * This function handles input focus.
     */

    /**
     * This function render multi value.
     */
    renderMultiValue() {
        let logger = Logger.create("renderMultiValue");
        let values = lodash.flatten([this.props.value]);

        logger.info("enter", {values});

        return values.map((value) => {
            return (
                <Value multi={true}
                    key={value}
                    option={this.selectedOptionsMap[value]}
                    onRemove={this.removeValue} />
            );
        });
    }

    /**
     * This function renders the value of the select.
     */
    renderValue() {
        let logger = Logger.create("renderValue");

        let {value,placeholder,multi} = this.props;
        let {searchValue} = this.state;
        let isSearchEmpty = lodash.isEmpty(searchValue);
        let isValueEmpty = lodash.isEmpty(value);

        logger.info("enter", {
            value,placeholder,multi,searchValue,isSearchEmpty,
            isValueEmpty
        });

        return isValueEmpty && isSearchEmpty ? (
            <div className={styles.placeholder}>
                <i18n.Translate text={placeholder}/>
            </div>
        ) : !isValueEmpty && multi ? (
            this.renderMultiValue()
        ) : !isValueEmpty && isSearchEmpty ? (
            <Value option={this.selectedOptionsMap[value]}></Value>
        ) : null;
    }

    /**
     * This function renders the search input.
     */
    renderSearch() {
        let props = lodash.assign({}, this.props.searchProps, {
            className: styles.search,
            inputClassName: styles.input,
            tabIndex: this.props.tabIndex,
            onBlur: this.onSearchBlur,
            onFocus: this.onSearchFocus,
            onChange: this.onSearchChange,
            value: this.state.searchValue,
            ref: (ref) => {this.searchInputRef = ref;}
        });

        return (
            <AutosizeInput {...props} minWidth="5"/>
        );
    }

    /**
     * This function renders the loader.
     */
    renderLoader() {
        let logger = Logger.create("renderLoader");
        logger.info("enter", {loading: this.props.loading});

        return this.props.loading ? (
            <div className={styles.loaderZone}>
                {this.props.loaderComponent || (
                    <Spinner.Bars color="#bbb" scale={1.3} />
                )}
            </div>
        ) : null;
    }

    /**
     * This function renders the caret.
     */
    renderCaret() {
        return (
            <div className={styles.caretZone}>
                <span className={styles.caret}></span>
            </div>
        );
    }

    /**
     * This function renders an option.
     */
    renderOption(option, {parse=(t)=>{return t;}} = {}) {
        let {searchValue,focusedOption} = this.state;

        let optionClasses = [
            option.action?styles.optionAction:"",
            focusedOption == option?styles.optionFocused:""
        ];

        return option.placeholder ? (
            <li key={option.value} className={styles.optionPlaceholder}>
                <i18n.Translate text={option.label} />
            </li>
        ) : (
            <li key={option.value} className={classNames(optionClasses)}>
                <a ref={(ref) => {
                    if(focusedOption == option) {
                        this.focusedOptionRef = ref;
                    }
                }} onMouseDown={(evt) => {
                    // Only primary button clicks allowed.
                    if(evt.type === "mousedown"
                    && evt.button !== 0) { return; }

                    evt.preventDefault();
                    evt.stopPropagation();

                    this.selectOption(option);
                }} onMouseEnter={() => {
                    this.focusOption(option);
                }}>
                    <i18n.Translate text={option.label}
                        data={lodash.merge({}, option.data, {
                            value: searchValue
                        })} parse={
                            this.props.labelMatchHighlight
                            && !option.preventLabelMatchHighlight?
                                parse :
                                undefined
                        }/>

                    {option.action? (
                        <span className="icon-circled-play"
                            style={{
                                marginLeft: "0.4em",
                                fontSize: "0.8em"
                            }}>
                        </span>
                    ) : null}
                </a>
            </li>
        );
    }

    /**
     * This function renders the options menu.
     */
    renderMenu() {
        let {searchValue} = this.state;
        let options = this.visibleOptions||[];

        return (
            <ul className={styles.menu}
                onMouseDown={this.onMenuMouseDown}
                ref={(ref) => { this.menuRef = ref; }}
                style={{fontSize: `${this.props.scale}em`}}>
                {this.props.loading ? (
                    this.renderOption({
                        value: "__loading",
                        label: this.props.loadingLabel,
                        placeholder: true
                    })
                ) : !options.length ? (
                    this.renderOption({
                        value: "__no_options",
                        label: this.props.noOptionsLabel,
                        placeholder: true
                    })
                ) : (
                    options.map((option) => {
                        option = lodash.isString(option)?
                            {value:option,label:option}:
                            option;

                        return this.renderOption(option, {
                            parse: (translation) => {
                                if(!lodash.isEmpty(searchValue)) {
                                    let regx = new RegExp(`(${searchValue})`, "g");

                                    return translation.replace(
                                        regx,
                                        "<b>$1</b>"
                                    );
                                }

                                return translation;
                            }
                        });
                    })
                )}
            </ul>
        );
    }

    /**
     * This function is responsible for generating the component's view.
     */
    render() {
        let logger = Logger.create("render");
        logger.info("enter");

        let {searchable,loading} = this.props;
        let {isMenuOpen,isSearchFocused} = this.state;

        let visibleOptions
            = this.visibleOptions
            = this.processOptions({options: this.props.options});

        let controlClasses = [
            styles.control,
            (isMenuOpen&&visibleOptions)||loading?styles.open:"",
            searchable?styles.searchable:"",
            isSearchFocused||(isMenuOpen&&!searchable)?styles.active:"",
            !this.props.isValid?styles.invalid:""
        ];

        logger.info("state", {isMenuOpen, isSearchFocused});

        return (
            <div className={styles.select}>
                <div className={classNames(controlClasses)}
                    onMouseDown={this.onControlMouseDown}
                    onKeyDown={this.onControlKeyDown}
                    style={{fontSize: `${this.props.scale}em`}}>
                    <div className={styles.valueZone}>
                        {this.renderValue()}
                        {this.renderSearch()}
                    </div>

                    {this.renderLoader()}
                    {this.renderCaret()}
                </div>

                {(isMenuOpen&&visibleOptions)||(loading) ? (
                    this.renderMenu()
                ) : null}
            </div>
        );
    }
}
