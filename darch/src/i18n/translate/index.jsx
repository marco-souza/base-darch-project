import React from "react";
import {connect} from "react-redux";
import lodash from "lodash";
import {LoggerFactory} from "darch/src/utils";
import Utils from "../utils";

let Logger = new LoggerFactory("i18n.translate", {level:"debug"});

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
    static displayName = "i18n.translate";
    static defaultProps = {
        opts: {},
        parse: (translation) => {return translation;}
    };
    static propTypes = {
        opts: React.PropTypes.object,
        text: React.PropTypes.string.isRequired,
        data: React.PropTypes.object,
        parse: React.PropTypes.func
    };

    componentDidMount() {
        let logger = Logger.create("componentDidMount");
        logger.info("enter", {props: this.props});
    }

    translate() {
        let logger = Logger.create("translate");
        logger.info("enter", {props: this.props});

        let spec = lodash.get(this.props, "spec");
        let {text,data,parse} = this.props;

        return Utils.translate({spec,text,data,parse});
    }

    render() {
        return (
            <span className={this.props.className}
                style={this.props.style}
                dangerouslySetInnerHTML={{
                    __html: this.translate()
                }}>
            </span>
        );
    }
}

/** Export **/
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
