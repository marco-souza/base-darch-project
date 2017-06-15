import React from "react";
import classNames from "classnames";
import {LoggerFactory,Style} from "darch/src/utils";
import styles from "./styles";

let Logger = new LoggerFactory("label", {level:"error"});

/**
 * Main component class.
 */
export default class Component extends React.Component {
    /** React properties **/
    static displayName = "label";
    
    static defaultProps = {
        scale: 1,
        layout: "flat",
        color: "moody"
    };

    static propTypes = {
        scale: React.PropTypes.number,
        layout: React.PropTypes.oneOf([
            "flat",
            "outline"
        ]),
        color: React.PropTypes.oneOf([
            "positive",
            "moody",
            "calm",
            "stable",
            "success",
            "warning",
            "danger"
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
        let {scale,layout,color} = this.props;

        let classes = [
            styles.label,
            styles[`label-${layout}`],
            styles[`label-${layout}-${color}`]
        ];

        let style = {
            fontSize: Style.setUnit(Style.getSize(scale))
        };

        return (
            <span className={classNames(classes)} style={style}>
                {this.props.children}
            </span>
        );
    }
}
