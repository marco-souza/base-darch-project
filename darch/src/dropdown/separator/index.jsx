import React from "react";
//import classNames from "classnames";
import {LoggerFactory} from "darch/src/utils";
import styles from "./styles";

let Logger = new LoggerFactory("dropdown.separator", {level:"error"});

/**
 * Main component class.
 */
export default class Component extends React.Component {
    /** React properties **/
    static displayName = "dropdown.separator";
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
     * This function is responsible for generating the component's view.
     */
    render() {
        return (
            <li className={styles.separator}></li>
        );
    }
}
