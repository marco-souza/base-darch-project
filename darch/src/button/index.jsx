import React from "react";
import classNames from "classnames";
import {LoggerFactory,Style} from "darch/src/utils";
import i18n from "darch/src/i18n";
import styles from "./styles";

let Logger = new LoggerFactory("button", {level:"error"});

/**
 * Main component class.
 */
export default class Component extends React.Component {
    /** React properties **/
    static displayName = "button";
    static defaultProps = {
        scale: 1,
        layout: "flat",
        color: "moody",
        type: "button",
        loading: false,
        active: false,
        disabled: false,
        onClick: () => {},
        onFocus: () => {},
        onBlur: () => {},
        loadingComponent: (<i18n.Translate text="_LOADING_" />)
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
        ]),
        type: React.PropTypes.oneOf([
            "button",
            "reset",
            "submit"
        ]),
        loading: React.PropTypes.bool,
        active: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        onClick: React.PropTypes.func,
        onFocus: React.PropTypes.func,
        onBlur: React.PropTypes.func
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
        logger.info("enter", {disabled: this.props.disabled});

        let {scale,layout,color,disabled,active,loading} = this.props;

        let classes = [
            styles.button,
            styles[`button-${layout}`],
            styles[`button-${layout}-${color}`],
            disabled?styles[`button-${layout}-disabled`]:"",
            active?styles[`button-${layout}-${color}-active`]:"",
            loading?styles[`button-${layout}-disabled`]:""
        ];

        let style = {
            fontSize: Style.setUnit(Style.getSize(scale))
        };

        return (
            <button className={classNames(classes)}
                style={style}
                type={this.props.type}
                onClick={this.props.onClick}
                onFocus={this.props.onFocus}
                onBlur={this.props.onBlur}>
                {this.props.loading?
                    this.props.loadingComponent :
                    this.props.children}
            </button>
        );
    }
}
