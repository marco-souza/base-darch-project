import React from "react";
import {LoggerFactory,Style} from "darch/src/utils";
import i18n from "darch/src/i18n";
import styles from "./styles";

let Logger = new LoggerFactory("callout", {level:"error"});

/**
 * Main component class.
 */
export default class Component extends React.Component {
    /** React properties **/
    static displayName = "callout";
    static defaultProps = {
        color: "moody",
        scale: 1
    };
    static propTypes = {
        color: React.PropTypes.string,
        title: React.PropTypes.string,
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
        let {color,title,scale} = this.props;
        color = Style.getColor(color);

        let style = {
            borderLeftColor: color,
            fontSize: `${scale}em`,
        };

        let titleStyle = {
            color: color
        };

        return (
            <div className={styles.callout} style={style}>
                {title? (
                    <div className={styles.title} style={titleStyle}>
                        <i18n.Translate text={title} />
                    </div>
                ) : null}
                
                {this.props.children}
            </div>
        );
    }
}
