import React from "react";
import classNames from "classnames";
import {LoggerFactory} from "darch/src/utils";
import styles from "./styles";

let Logger = new LoggerFactory("bar.body", {level:"error"});

/**
 * Main component class.
 */
export default class Component extends React.Component {
    /** React properties **/
    static displayName = "bar.body";
    static defaultProps = {
        open: false
    };
    static propTypes = {
        open: React.PropTypes.bool
    };

    /**
     * This function constructs a new instance of the component.
     */
    constructor(props) {
        super(props);

        this.state = {open: false};
    }

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
            styles.body,
            !this.props.open?styles.closed:""
        ];

        return (
            <div className={classNames(classes)}>

                {this.props.open?(
                    <div className={styles.bodyBackground}></div>
                ) : null}

                {this.props.children}
            </div>
        );
    }
}
