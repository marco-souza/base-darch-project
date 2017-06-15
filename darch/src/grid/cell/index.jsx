import React from "react";
import {LoggerFactory} from "darch/src/utils";
import styles from "./styles";

let Logger = new LoggerFactory("grid.cell", {level:"error"});

/**
 * Main component class.
 */
export default class Component extends React.Component {
    /** React properties **/
    static displayName = "grid.cell";
    static defaultProps = {
        span: 1,
        spots: 12
    };
    static propTypes = {
        span: React.PropTypes.number,
        spots: React.PropTypes.number
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
        let {span,spots} = this.props;
        let width = (span/spots)*100;

        return (
            <div className={styles.cell} style={{width: `${width}%`}}>
                {this.props.children}
            </div>
        );
    }
}
