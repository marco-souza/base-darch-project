import React from "react";
import classNames from "classnames";
import lodash from "lodash";
import {LoggerFactory} from "darch/src/utils";
import styles from "./styles";

let Logger = new LoggerFactory("bar.menu", {level:"error"});

/**
 * Main component class.
 */
export default class Component extends React.Component {
    /** React properties **/
    static displayName = "bar.menu";
    static defaultProps = {
        togglable: true
    };
    static propTypes = {
        togglable: React.PropTypes.bool
    };

    /**
     * LYFECICLE : This function is called when component
     * got mounted in the view.
     */
    componentDidMount() {
        let logger = Logger.create("componentDidMount");
        logger.info("enter");
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
            let newProps = {};

            logger.info(`children map : ${idx}`, {type: displayName});

            // Special process children for header
            switch (displayName) {
                case "bar.item":
                    newProps.togglable = this.props.togglable;
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
     * This function is responsible for generating the component's view.
     */
    render() {
        return (
            <ul className={classNames([
                this.props.togglable?
                    styles.menu:
                    styles.menuScreenLg
            ])}>
                {this.processChildren(this.props.children)}
            </ul>
        );
    }
}
