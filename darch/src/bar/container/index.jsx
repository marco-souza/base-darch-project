import React from "react";
import classNames from "classnames";
import {LoggerFactory} from "darch/src/utils";
import Container from "darch/src/container";
import styles from "./styles";

let Logger = new LoggerFactory("bar.container", {level:"error"});

/**
 * Main component class.
 */
export default class Component extends React.Component {
    /** React properties **/
    static displayName = "bar.container";
    static defaultProps = {
        withBottomLine: false
    };
    static propTypes = {
        withBottomLine: React.PropTypes.bool
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
            this.props.withBottomLine?styles.bottomLine:""
        ];

        return (
            <Container className={classNames(classes)}>
                {this.props.children}
            </Container>
        );
    }
}
