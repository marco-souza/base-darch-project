import React from "react";
import classNames from "classnames";
import {LoggerFactory} from "darch/src/utils";
import styles from "./styles";

let Logger = new LoggerFactory("container", {level:"error"});

/**
 * Main component class.
 */
export default class Component extends React.Component {
    /** React properties **/
    static displayName = "container";
    static defaultProps = {};
    static propTypes = {
        size: React.PropTypes.oneOf([
            "sm",
            "md"
        ])
    };

    componentDidMount() {
        let logger = Logger.create("componentDidMount");
        logger.info("enter");
    }

    render() {
        let classes = [
            styles.container,
            this.props.className,
            this.props.size?styles[`container-${this.props.size}`]:""
        ];

        return (
            <div className={classNames(classes)}>
                {this.props.children}
            </div>
        );
    }
}
