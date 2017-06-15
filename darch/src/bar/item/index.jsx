import React from "react";
import classNames from "classnames";
import {LoggerFactory} from "darch/src/utils";
import styles from "./styles";

let Logger = new LoggerFactory("bar.item", {level:"error"});

/**
 * Main component class.
 */
export default class Component extends React.Component {
    /** React properties **/
    static displayName = "bar.item";
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
     * This function is responsible for generating the component's view.
     */
    render() {
        let classes = [
            this.props.togglable?
                styles.item :
                styles.itemScreenLg
        ];

        return (
            <li className={classNames(classes)}>
                {this.props.children}
            </li>
        );
    }
}
