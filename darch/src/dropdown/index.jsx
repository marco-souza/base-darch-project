import React from "react";
import {findDOMNode} from "react-dom";
import contains from "dom-helpers/query/contains";
import lodash from "lodash";
//import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import {LoggerFactory} from "darch/src/utils";
import styles from "./styles";
import Button from "darch/src/button";

let Logger = new LoggerFactory("dropdown", {level:"error"});

/**
 * Main component class.
 */
export default class Component extends React.Component {
    /** React properties **/
    static displayName = "dropdown";
    static defaultProps = {
    };
    static propTypes = {
        title: React.PropTypes.string,
        buttonSize: React.PropTypes.number
    };

    /** Nested components **/
    static Item = require("./item");
    static Separator = require("./separator");

    /** Instance properties **/
    state = {
        isOpen: false
    };

    /**
     * LYFECICLE : This function is called when component
     * got mounted in the view.
     */
    componentDidMount() {
        let logger = Logger.create("componentDidMount");
        logger.info("enter");

        // Handle document click
        document.addEventListener("click", this.onDocumentClick, false);
        document.addEventListener("touchend", this.onDocumentClick, false);
    }

    /**
     * LYFECICLE : This function is called when component
     * is going to be updated (props or state).
     */
    componentWillUpdate() {
        let logger = Logger.create("componentWillUpdate");
        logger.info("enter");
    }

    /**
     * LYFECICLE : This function is called when component
     * has just been updated (props or state).
     */
    componentDidUpdate() {
        let logger = Logger.create("componentDidUpdate");
        logger.info("enter");
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
     * This function process children.
     */
    processChildren(children) {
        if(!children){return;}

        let logger = Logger.create("processChildren");
        logger.info("enter");

        return React.Children.map(children, (component, idx) => {
            let displayName = lodash.get(component, "type.displayName");
            let newProps = {};

            logger.info(`children map : ${idx}`, {type: displayName});

            // Special process children for header
            switch (displayName) {
                case "dropdown.item":
                    newProps.dropdown = this;
                    break;
                default:
            }

            // Clone component with new props
            return lodash.size(newProps)?
                React.cloneElement(component, newProps) :
                component;
        });
    }

    /**
     * This function toggles the dropdown.
     */
    toggle() {
        this.setState({isOpen: !this.state.isOpen});
    }

    /**
     * This function handles document click.
     */
    onDocumentClick(evt) {
        let logger = Logger.create("onDocumentClick");
        logger.info("enter");

        let dropdownContainsClickedElem = contains(
            findDOMNode(this),
            evt.target
        );

        if(!dropdownContainsClickedElem) {
            this.setState({ isOpen: false });
        }
    }

    /**
     * This function is responsible for generating the component's view.
     */
    render() {
        return (
            <div className={styles.dropdown}>
                <Button onClick={this.toggle}
                    color={this.props.buttonColor}
                    layout={this.props.buttonLayout}
                    size={this.props.buttonSize}>
                    {this.props.title}
                    <span className={styles.caret}></span>
                </Button>

                {this.state.isOpen? (
                    <ul ref={(menu)=>{this.menu = menu;}}
                        className={styles.menu}>
                        {this.processChildren(this.props.children)}
                    </ul>
                ) : null}

                {/*style={{fontSize: `${this.props.size}em`||"inherit"}}
                    <ReactCSSTransitionGroup
                    transitionName={styles}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                    {this.props.isOpen? (
                        <ul ref="menu" className={styles.menu}>
                            {this.props.children}
                        </ul>
                    ) : null}
                </ReactCSSTransitionGroup>*/}
            </div>
        );
    }
}
