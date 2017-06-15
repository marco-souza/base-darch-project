import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import {connect} from "react-redux";
import {LoggerFactory} from "darch/src/utils";
import Toast from "./toast";
import styles from "./styles";

let Logger = new LoggerFactory("toaster", {level:"error"});

/**
 * Redux map state to props function.
 *
 * @param {object} state
 * @param {object} ownProps
 */
function mapStateToProps(state) {
    return {
        toasts: state.toaster.toasts
    };
}

/**
 * Redux dispatch to props map.
 */
let mapDispatchToProps = {

};

/**
 * Main component class.
 */
class Component extends React.Component {
    /** React properties **/
    static displayName = "toaster";
    static defaultProps = {};
    static propTypes = {};

    /** Nested components **/
    static Toast = require("./toast");

    /** Store utils **/
    static actions = require("./actions");
    static reducer = require("./reducer");

    componentDidMount() {
        let logger = Logger.create("componentDidMount");
        logger.info("enter");
    }

    render() {
        let logger = Logger.create("render");
        logger.info("enter", this.props.toasts);

        return (
            <div className={styles.container}>
                <ReactCSSTransitionGroup
                    transitionName="transition"
                    transitionEnterTimeout={1000}
                    transitionLeaveTimeout={1000}>
                    {this.props.toasts.map((toast) => {
                        return <Toast key={toast.id} data={toast} />;
                    })}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}
/*

 */

/** Export **/
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
