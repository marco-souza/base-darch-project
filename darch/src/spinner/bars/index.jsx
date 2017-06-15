import React from "react";
import lodash from "lodash";
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
        scale: 1
    };
    static propTypes = {
        color: React.PropTypes.string,
        scale: React.PropTypes.number
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
        logger.info("enter", {
            scale: this.props.scale,
            backgroundColor: this.props.color
        });

        let {scale} = this.props;
        let size = Style.getSize(scale);
        let width = Math.round(size/4);
        let space = Math.round(size/9);

        let spinnerStyles = {
            fontSize: `${scale}em`
        };

        let rectStyles = {
            backgroundColor: this.props.color,
            width: Style.setUnit(width)
        };

        let rectStyles2 = lodash.assign({}, rectStyles, {
            marginLeft: Style.setUnit(space)
        });

        return (
            <div className={styles.spinner} style={spinnerStyles}>
                <div style={rectStyles}></div>
                <div className={styles.rect2} style={rectStyles2}></div>
                <div className={styles.rect3} style={rectStyles2}></div>
            </div>
        );
    }
}
