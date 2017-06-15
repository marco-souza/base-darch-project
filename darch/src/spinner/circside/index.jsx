import React from "react";
import {LoggerFactory,Style} from "darch/src/utils";
import styles from "./styles";

let Logger = new LoggerFactory("spinner.bars", {level:"error"});

/**
 * Main component class.
 */
export default class Component extends React.Component {
    /** React properties **/
    static displayName = "spinner.bars";
    static defaultProps = {
        color: "#333",
        size: 1,
        alpha: 0.2
    };
    static propTypes = {
        color: React.PropTypes.string,
        size: React.PropTypes.number,
        alpha: React.PropTypes.number
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
        let logger = Logger.create("render");
        let {color,alpha} = this.props;
        let {r,g,b} = Style.hexToRGBColor(color);

        logger.info("enter", {
            size: this.props.size,
            color: this.props.color
        });

        let spinnerStyles = {
            fontSize: `${this.props.size}em`,
            borderLeftColor: `rgba(${r},${g},${b}, 1)`,
            borderTopColor: `rgba(${r},${g},${b},${alpha})`,
            borderRightColor: `rgba(${r},${g},${b},${alpha})`,
            borderBottomColor: `rgba(${r},${g},${b},${alpha})`
        };

        return (
            <div className={styles.spinner} style={spinnerStyles}>
            </div>
        );
    }
}
