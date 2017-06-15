import React from "react";
import {connect} from "react-redux";
import classNames from "classnames";
import {LoggerFactory} from "darch/src/utils";
import styles from "./styles";
import i18n from "darch/src/i18n";

let Logger = new LoggerFactory("field.text");

/**
 * Redux map state to props function.
 *
 * @param {object} state
 * @param {object} ownProps
 */
function mapStateToProps(state) {
    return {
        spec: state.i18n.spec
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
    static displayName = "field.text";
    static defaultProps = {
        value: "",
        scale: 1
    };
    static propTypes = {
        scale: React.PropTypes.number,
        value: React.PropTypes.string
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
     * This function handle field value change.
     */
    onChange(evt) {
        let logger = Logger.create("onChange");
        logger.info("enter", {value: evt.target.value});

        this.props.onChange(evt.target.value);
    }

    onKeyDown(evt) {
        let logger = Logger.create("onKeyDown");
        logger.info("enter", {
            keyCode: evt.keyCode,
            keyIdentifier: evt.keyIdentifier
        });
    }

    /**
     * This function is responsible for generating the component's view.
     */
    render() {
        let {spec,placeholder,scale} = this.props;

        let props = {
            value: this.props.value,
            onKeyDown: this.onKeyDown,
            onChange: this.onChange,
            onBlur: this.props.onBlur,
            onFocus: this.props.onFocus,
            type: this.props.type,
            placeholder: i18n.utils.translate({spec, text:placeholder})
        };

        return (
            <input className={classNames([
                styles.field,
                this.props.validating?styles.validating:"",
                !this.props.isValid?styles.invalid:""
            ])} style={{fontSize: `${scale}em`}} {...props} />
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
