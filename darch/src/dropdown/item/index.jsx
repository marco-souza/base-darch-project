import React from "react";
//import classNames from "classnames";
import {LoggerFactory} from "darch/src/utils";
import styles from "./styles";

let Logger = new LoggerFactory("dropdown.item", {level:"error"});

/**
 * Main component class.
 */
export default class Component extends React.Component {
    /** React properties **/
    static displayName = "dropdown.item";
    static defaultProps = {
    };
    static propTypes = {
    };

    /** Nested components **/

    /**
     * LYFECICLE : This function is called when component
     * got mounted in the view.
     */
    componentDidMount() {
        let logger = Logger.create("componentDidMount");
        logger.info("enter");
    }

    /**
     * LYFECICLE : This function is called when component
     * goind to be unmounted from the view.
     */
    componentWillUnmount() {
        let logger = Logger.create("componentWillUnmount");
        logger.info("enter");
    }

    /**
     * This function handles link click.
     */
    onClick() {
        if(this.props.dropdown) { this.props.dropdown.toggle(); }
        else { this.props.onClick(); }
    }

    /**
     * This function is responsible for generating the component's view.
     */
    render() {
        return (
            <li className={styles.item}>
                <a className={styles.link} onClick={this.onClick}>
                    {this.props.children}
                </a>
            </li>
        );
    }
}
