import React from "react";
import classNames from "classnames";
import {LoggerFactory,Redux} from "darch/src/utils";
import i18n from "darch/src/i18n";
import styles from "./styles";
import actions from "../actions";

let Logger = new LoggerFactory("toaster.toast", {level:"error"});

/**
 * Main component class.
 */
export default class Component extends React.Component {
    /** React properties **/
    static displayName = "toaster.toast";
    static defaultProps = {};
    static propTypes = {
        data: React.PropTypes.object.isRequired
    };

    componentDidMount() {
        let logger = Logger.create("componentDidMount");
        logger.info("enter", this.props.data);

        this.setTimer();
    }

    setTimer() {
        this.timeoutID = setTimeout(() => {
            Redux.shared.store.dispatch(actions.remove(this.props.data));
        }, 5000);
    }

    clearTimer() {
        clearTimeout(this.timeoutID);
    }

    onMouseEnter() {
        this.clearTimer();
    }

    onMouseLeave() {
        this.setTimer();
    }

    onToastClick() {
        Redux.shared.store.dispatch(actions.remove(this.props.data));
    }

    render() {
        let {type} = this.props.data;

        return (
            <div className={classNames(["transition-enter", styles.toast, styles[`type-${type}`]])}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}>
                <i18n.Translate text={this.props.data.message} />
            </div>
        );
    }
}
