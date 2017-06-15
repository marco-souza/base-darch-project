import React from "react";
import {LoggerFactory} from "darch/src/utils";
import styles from "./styles";

let Logger = new LoggerFactory("field.section", {level:"error"});

/**
 * Main component class.
 */
export default class Component extends React.Component {
    /** React properties **/
    static displayName = "field.section";
    static defaultProps = {};
    static propTypes = {};

    /**
     * LYFECICLE : This function is called when component
     * got mounted in the view.
     */
    componentDidMount() {
        let logger = Logger.create("componentDidMount");
        logger.info("enter");
    }

    /**
     * This function is responsible for generating the component's view.
     */
    render() {
        return (
            <div className={styles.section}>
                {this.props.children}
            </div>
        );
    }
}
