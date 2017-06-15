import React from "react";
import classNames from "classnames";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import {LoggerFactory} from "darch/src/utils";
import styles from "./styles";

let Logger = new LoggerFactory("modal", {level:"error"});

/**
 * Main component class.
 */
export default class Component extends React.Component {
    /** React properties **/
    static displayName = "modal";
    static defaultProps = {
        open: false,
        onDismiss: ()=>{},
        dismissOnBackgroundClick: true
    };
    static propTypes = {
        open: React.PropTypes.bool,
        onDismiss: React.PropTypes.func,
        dismissOnBackgroundClick: React.PropTypes.bool,
        size: React.PropTypes.oneOf([
            "sm", "lg"
        ])
    };

    /** Static auxiliary properties **/
    static openCount = 0;

    /** Nested components **/
    static Header = require("./header");
    static Body = require("./body");
    static Footer = require("./footer");

    /**
     * LYFECICLE : This function is called when component
     * got mounted in the view.
     */
    componentDidMount() {
        let logger = Logger.create("componentDidMount");
        logger.info("enter");
    }

    componentDidUpdate(prevProps) {
        if(!prevProps.open && this.props.open) {
            Component.openCount++;

            // Add class to body signalizing that modal is open.
            if(document.body.className.indexOf("modal-open") < 0) {
                document.body.className += " modal-open";
            }
        }
        else if(prevProps.open && !this.props.open) {
            // Remove class from body signalizing that modal is closed.
            if(--Component.openCount == 0) {
                document.body.className = document.body.className.replace(/modal-open/g,"");
            }
        }
    }

    /**
     * LYFECICLE : This function is called when component
     * goind to be unmounted from the view.
     */
    componentWillUnmount() {
        let logger = Logger.create("componentWillUnmount");
        logger.info("enter");
    }

    /**
     * This function handles click on background.
     */
    onBackgroundClick() {
        let logger = Logger.create("onBackgroundClick");
        logger.info("enter");

        if(this.props.dismissOnBackgroundClick) {
            this.props.onDismiss();
        }
    }

    /**
     * This function is responsible for generating the component's view.
     */
    render() {
        let logger = Logger.create("render");
        logger.info("enter");

        let contentClasses = [
            styles.content,
            this.props.size?styles[`content-${this.props.size}`]:""
        ];

        return (
            <ReactCSSTransitionGroup
                transitionName={styles}
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={1000}>
                {this.props.open? (
                    <div className={styles.modal}>
                        <div onClick={this.onBackgroundClick} className={styles.background}></div>

                        <div className={classNames(contentClasses)}>
                            {this.props.children}
                        </div>
                    </div>
                ) : null}
            </ReactCSSTransitionGroup>
        );

        /*return this.props.open ? (
            <div className={styles.modal}>
                <ReactCSSTransitionGroup
                    transitionName="modal-background"
                    transitionAppear={true}
                    transitionAppearTimeout={1000}
                    transitionLeaveTimeout={1000}
                    transitionEnter={false}>
                    <div onClick={this.onBackgroundClick} className={styles.modalBackground}></div>
                </ReactCSSTransitionGroup>

                <ReactCSSTransitionGroup
                    transitionName="modal-content"
                    transitionAppear={true}
                    transitionAppearTimeout={1000}
                    transitionLeaveTimeout={1000}
                    transitionEnter={false}>
                    <div className={classNames(contentClasses)}>
                        {this.props.children}
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        ) : null;*/
    }
}
