import React from "react";
import {connect} from "react-redux";
import lodash from "lodash";
import moment from "moment";
import {LoggerFactory} from "darch/src/utils";

let Logger = new LoggerFactory("i18n.moment", {level:"debug"});

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
    static displayName = "i18n.moment";
    static defaultProps = {
        formatter: "datetime"
    };
    static propTypes = {
        opts: React.PropTypes.object,
        date: React.PropTypes.string.isRequired,
        formatter: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.func
        ])
    };

    componentDidMount() {
        let logger = Logger.create("componentDidMount");
        logger.info("enter", {props: this.props});
    }

    format() {
        let logger = Logger.create("format");
        logger.info("enter", {props: this.props});

        let spec = lodash.get(this.props, "spec");
        let {date,formatter} = this.props;

        let momentDate = moment(date);

        if(momentDate.isValid()) {
            if(lodash.isString(formatter)) {
                let format = lodash.get(spec.formats,formatter);

                if(format) { date = momentDate.format(format); }
                else { date = momentDate.format(formatter); }
            }
            else if(lodash.isFunction(formatter)) {
                date = formatter(date);
            }
        }

        logger.debug("formatted date", {date});

        return date;
    }

    render() {
        return (
            <span className={this.props.className}
                style={this.props.style}>
                {this.format()}
            </span>
        );
    }
}

/** Export **/
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
