import React from "react";
import classNames from "classnames";
import lodash from "lodash";
import {LoggerFactory} from "darch/src/utils";
import styles from "./styles";

let Logger = new LoggerFactory("bar", {level:"error"});

/**
 * Main component class.
 */
export default class Component extends React.Component {
    /** React properties **/
    static displayName = "bar";
    static defaultProps = {
        onToggle: () => {},
        fixedOnTop: false,
        open: false
    };
    static propTypes = {
        onToggle: React.PropTypes.func,
        fixedOnTop: React.PropTypes.bool,
        open: React.PropTypes.bool
    };

    /** Nested components **/
    static Header = require("./header");
    static Body = require("./body");
    static Menu = require("./menu");
    static Item = require("./item");
    static Container = require("./container");
    static Toggle = require("./toggle");

    /**
     * This function constructs a new instance of the component.
     */
    constructor(props) {
        super(props);
    }

    /**
     * LYFECICLE : This function is called when component
     * got mounted in the view.
     */
    componentDidMount() {
        let logger = Logger.create("componentDidMount");
        logger.info("enter");

        // Add class to body signalizing that bar is fixed.
        document.body.className += " bar-fixed-on-top";
    }

    processChildrenWithinHeader(children) {
        if(!children){return;}

        let logger = Logger.create("processChildrenWithinHeader");
        logger.info("enter");

        return React.Children.map(children, (component, idx) => {
            let displayName = lodash.get(component, "type.displayName");
            let oldChildren = lodash.get(component, "props.children");
            let newChildren, newProps = {};

            logger.info(`children map : ${idx}`, {type: displayName});

            // Special process children for header
            switch (displayName) {
                case "bar.toggle":
                    logger.info("found toggle");
                    newProps.bar = this;
                    newProps.open = this.props.open;
                    break;
                case "bar.menu":
                    newProps.togglable = false;
                    newChildren = this.processChildrenWithinHeader(oldChildren);
                    break;
                default:
                    newChildren = this.processChildrenWithinHeader(oldChildren);
            }

            // Clone component with new props
            return newChildren||lodash.size(newProps)?
                React.cloneElement(component, newProps, newChildren) :
                component;
        });
    }

    /**
     * This function process all field children.
     */
    processChildren(children) {
        if(!children){return;}

        let logger = Logger.create("processChildren");
        logger.info("enter");

        return React.Children.map(children, (component, idx) => {
            let displayName = lodash.get(component, "type.displayName");
            let oldChildren = lodash.get(component, "props.children");
            let newChildren, newProps = {};

            logger.info(`children map : ${idx}`, {type: displayName});

            // Special process children for header
            switch (displayName) {
                case "bar.header":
                    newChildren = this.processChildrenWithinHeader(oldChildren);
                    break;
                case "bar.body":
                    newProps.open = this.props.open;
                    newChildren = this.processChildren(oldChildren);
                    break;
                default:
                    newChildren = this.processChildren(oldChildren);
            }

            // Clone component with new props
            return newChildren||lodash.size(newProps)?
                React.cloneElement(component, newProps, newChildren) :
                component;
        });
    }

    /**
     * This function toggle body.
     */
    toggle() {
        this.props.onToggle();
    }

    /**
     * This function is responsible for generating the component's view.
     */
    render() {
        let {fixedOnTop} = this.props;
        let classes = [
            styles.bar,
            fixedOnTop?styles.fixedOnTop:""
        ];

        return (
            <div className={classNames(classes)}>
                {this.processChildren(this.props.children)}
            </div>
        );
    }
}

//<div className={styles.background}></div>
