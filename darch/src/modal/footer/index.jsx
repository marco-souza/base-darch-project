import React from "react";
import classNames from "classnames";
import {LoggerFactory} from "darch/src/utils";
import styles from "./styles";

let Logger = new LoggerFactory("modal.footer", {level:"error"});

/**
 * Main component class.
 */
export default class Component extends React.Component {
    /** React properties **/
    static displayName = "modal.footer";
    static defaultProps = {
        align: "left"
    };
    static propTypes = {
        align: React.PropTypes.oneOf([
            "left",
            "center",
            "right"
        ])
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
            styles.modalFooter,
            `text-${this.props.align}`
        ];

        return (
            <div className={classNames(classes)}>
                {this.props.children}
            </div>
        );
    }
}
