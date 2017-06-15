import React from "react";
import classNames from "classnames";
import {LoggerFactory,Style} from "darch/src/utils";
import i18n from "darch/src/i18n";
import styles from "./styles";

let Logger = new LoggerFactory("field.switch", {level:"error"});

/**
 * Main component class.
 */
export default class Component extends React.Component {
    /** React properties **/
    static displayName = "field.switch";
    static defaultProps = {
        scale: 1,
        value: false,
        trueBackground: "moody"
    };

    static propTypes = {
        value: React.PropTypes.bool,
        scale: React.PropTypes.number,
        trueLabel: React.PropTypes.string,
        falseLabel: React.PropTypes.string,
        trueBackground: React.PropTypes.string
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
     * This function handle click on switch.
     */
    onClick() {
        let newVal = !this.props.value;
        this.props.onChange(newVal);
    }

    /**
     * This function is responsible for generating the component's view.
     */
    render() {
        let switchClasses = [
            styles.switch,
            this.props.value?styles.switchOn:styles.switchOff
        ];

        let switchStyles = {
            backgroundColor: this.props.value ?
                Style.getColor(this.props.trueBackground) :
                ""
        };

        let labelStyles = {
            color: this.props.value ?
                Style.getColor(this.props.trueBackground) :
                "#999"
        };

        let label = this.props.value?
            this.props.trueLabel:
            this.props.falseLabel;

        return (
            <div className={styles.switchContainer}>
                <div className={classNames(switchClasses)} 
                    style={switchStyles} 
                    onClick={this.onClick}>

                    <div className={styles.ball}></div>
                </div>

                {label ? (
                    <div className={styles.switchLabel} 
                        style={labelStyles}>
                        <i18n.Translate text={label} />
                    </div>
                ) : null}
            </div>
        );
    }
}
