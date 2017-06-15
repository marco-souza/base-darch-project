import React from "react";
import classNames from "classnames";
import lodash from "lodash";
import {findDOMNode} from "react-dom";
import contains from "dom-helpers/query/contains";
import AutosizeInput from "react-input-autosize";
import {LoggerFactory} from "darch/src/utils";
import i18n from "darch/src/i18n";
import Spinner from "darch/src/spinner";
import styles from "./styles";

let Logger = new LoggerFactory("field.select");

/**
 * Main component class.
 */
export default class Component extends React.Component {
    /** React properties **/
    static displayName = "field.select";
    static defaultProps = {
        options: [],
        multi: false,
        creatable: false,
        createOptionLabel: "Create option \"{{value}}\"",
        onCreateOption: () => {},
        createOptionAsync: false,
        selectOptionAfterCreate: true,
        searchable: true,
        placeholder: "-- select --",
        openMenuOnSearchFocus: true,
        clearSearchOnBlur: true,
        clearSearchOnMenuClose: true,
        labelMatchHighlight: true
    };
    static propTypes = {
        value: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.arrayOf(React.PropTypes.string)
        ]),
        options: React.PropTypes.oneOfType([
            React.PropTypes.arrayOf(
                React.PropTypes.oneOfType([
                    React.PropTypes.string,
                    React.PropTypes.shape({
                        value: React.PropTypes.string,
                        label: React.PropTypes.string
                    })
                ])
            )
        ]),
        loadOptions: React.PropTypes.func,
        multi: React.PropTypes.bool,
        creatable: React.PropTypes.bool,
        createOptionLabel: React.PropTypes.string,
        onCreateOption: React.PropTypes.func,
        createOptionAsync: React.PropTypes.bool,
        selectOptionAfterCreate: React.PropTypes.bool,
        searchable: React.PropTypes.bool,
        placeholder: React.PropTypes.string,
        openMenuOnSearchFocus: React.PropTypes.bool,
        clearSearchOnBlur: React.PropTypes.bool,
        clearSearchOnMenuClose: React.PropTypes.bool,
        labelMatchHighlight: React.PropTypes.bool
    };

    /** Instance properties **/
    state = {
        searchValue: "",
        isSearchFocused: false,
        isMenuOpen: false,
    };

    createOptionAction = {
        value: "__create_option",    // This should be a unique hash
        label: this.props.createOptionLabel,
        action: (value) => {
            return Promise.resolve(this.props.onCreateOption(value))
            .then(() => {
                if(this.props.selectOptionAfterCreate) {
                    this.selectValue(value);
                }
            });
        },
        preventLabelMatchHighlight: true,
        async: this.props.createOptionAsync
    };

    /**
     * LYFECICLE : This function is called when component
     * got mounted in the view.
     */
    componentDidMount() {
        let logger = Logger.create("componentDidMount");
        logger.info("enter");

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
    filterOptions({searchValue=this.state.searchValue}={}) {
        let logger = Logger.create("filterOptions");
        let {multi,value} = this.props;
        let isEmptySearch = lodash.isEmpty(searchValue);

        logger.info("enter", {
            searchValue: searchValue
        });

        if(isEmptySearch && !multi){
            return this.props.options;
        }
        else if(isEmptySearch) {
            // Remove already selected options.
            return lodash.filter(this.props.options, (option) => {
                return (value||[]).indexOf(option.value) < 0;
            });
        }

        return lodash.filter(this.props.options, (option) => {
            if(option.label.indexOf(searchValue) < 0) {
                return false;
            }

            return multi ?
                (value||[]).indexOf(option.value) < 0 :
                true;
        });
    }

    /**
     * This function selects a value.
     */
    selectValue(value) {
        let logger = Logger.create("selectValue");
        logger.info("enter", {value});

        let newState = {
            searchValue: ""
        };

        if(this.props.multi) {
            let values = !lodash.isEmpty(this.props.value)?
                lodash.flatten([this.props.value]):
                [];

            values.push(value);
            values = lodash.uniq(values);
            value = values;
        }
        else {
            this.blurSearch();
        }

        this.setState(newState, () => {
            this.props.onChange(value);
        });
    }

    /**
     * This function runs an action option.
     */
    runActionOption(option) {
        if(!option||!option.action){return;}

        let newState = {
            isMenuOpen: false,
            focusedOption: null
        };

        if(option.async) {
            // Prevent running multiple async actions at the
            // same time.
            if(this.state.loading){ return; }

            newState.loading = true;
        }

        // Set new state.
        this.setState(newState);

        // Run action
        Promise.resolve(option.action(
            this.state.searchValue
        )).then(() => {
            if(option.async) {
                this.setState({
                    loading: false
                }, () => {
                    this.blur();
                });
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

            this.selectValue(option.value);
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
            searchValue: !this.props.clearSearchOnMenuClose?
                this.state.searchValue :
                ""
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

        // If menu is not opened yet, then opened it and
        // select the first available option (not filtered).
        if(!this.state.isMenuOpen) {
            logger.debug("menu closed");

            return this.setState({
                isMenuOpen: true,
                searchValue: "",
                focusedOption: this.props.options.length?
                    this.props.options[0]:
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
                focusedOption: null,
                searchValue: !this.props.clearSearchOnMenuClose?
                    this.state.searchValue :
                    ""
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

        // @NOTE : We force menu open to handle the case
        // where user is removing multi values (which triggers
        // search input focus) and then insert a search text.
        // Upon this text insertion, menu should be open to
        // show results.
        this.setState({
            isMenuOpen: true,
            searchValue: evt.target.value
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
            this.focusPrevOption();
            break;

        // Down : focus next option.
        case 40:
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
        let values = lodash.flatten([this.props.value]);

        return values.map((value) => {
            return (
                <span role="option" aria-selected="true" key={value} className={styles.valueMulti}>
                    <span className={styles.valueMultiRemove} onMouseDown={(evt) => {
                        evt.stopPropagation();
                        evt.preventDefault();
                        this.removeValue(value);
                    }} aria-hidden="true">
                        <span className="icon-delete2"></span>
                    </span>
                    <div className={styles.valueMultiBody}>
                        <i18n.Translate text={
                            (lodash.find(this.props.options, (option) => {
                                return option.value == value;
                            })||{}).label
                        }></i18n.Translate>
                    </div>
                </span>
            );
        });
    }

    /**
     * This function renders the value of the select.
     */
    renderValue() {
        let {value,placeholder,multi} = this.props;
        let {searchValue} = this.state;
        let isSearchEmpty = lodash.isEmpty(searchValue);
        let isValueEmpty = lodash.isEmpty(value);

        return isValueEmpty && isSearchEmpty ? (
            <div className={styles.placeholder}>
                {placeholder}
            </div>
        ) : !isValueEmpty && multi ? (
            this.renderMultiValue()
        ) : !isValueEmpty && isSearchEmpty ? (
            <div className={styles.valueSingle}>
                <i18n.Translate text={
                    (lodash.find(this.props.options, (option) => {
                        return option.value == value;
                    })||{}).label
                }></i18n.Translate>
            </div>
        ): null;
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
        return this.state.loading ? (
            <div className={styles.loaderZone}>
                {this.props.loaderComponent || (
                    <Spinner.Bars color="#bbb" size={1.3} />
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

        return (
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
        let {creatable} = this.props;

        let options = this.filteredOptions||[];
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
        options = this.visibleOptions = options.concat(customActions);

        return (
            <ul className={styles.menu}
                onMouseDown={this.onMenuMouseDown}
                ref={(ref) => { this.menuRef = ref; }}
                style={{fontSize: `${this.props.size}em`}}>
                {options.map((option) => {
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
                })}
            </ul>
        );
    }

    /**
     * This function is responsible for generating the component's view.
     */
    render() {
        let logger = Logger.create("render");
        logger.info("enter");

        this.filteredOptions
            = this.visibleOptions
            = this.filterOptions();

        let {searchable} = this.props;
        let {isMenuOpen,isSearchFocused} = this.state;

        let controlClasses = [
            styles.control,
            isMenuOpen?styles.open:"",
            searchable?styles.searchable:"",
            isSearchFocused?styles.active:""
        ];
        //let visibleOptions = this.filterOptions();
        logger.info("state", {isMenuOpen, isSearchFocused});

        return (
            <div className={styles.select}>
                <div className={classNames(controlClasses)}
                    onMouseDown={this.onControlMouseDown}
                    onKeyDown={this.onControlKeyDown}
                    style={{fontSize: `${this.props.size}em`}}>
                    <div className={styles.valueZone}>
                        {this.renderValue()}
                        {this.renderSearch()}
                    </div>

                    {this.renderLoader()}
                    {this.renderCaret()}
                </div>

                {isMenuOpen ? (
                    this.renderMenu()
                ) : null}
            </div>
        );
    }
}
