import React from "react";
import {LoggerFactory} from "darch/src/utils";
//import styles from "./styles";

let Logger = new LoggerFactory("text", {level:"error"});

/**
 * Main component class.
 */
export default class Component extends React.Component {
    /** React properties **/
    static displayName = "text";
    static defaultProps = {
        scale: 1,
        block: false
    };
    static propTypes = {
        scale: React.PropTypes.number,
        block: React.PropTypes.bool
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
        let {scale, block} = this.props;

        let style = {
            fontSize: `${scale}em`,
            display: block?"block":"inline-block"
        };

        return (
            <div style={style}>
                {this.props.children}
            </div>
        );
    }
}
