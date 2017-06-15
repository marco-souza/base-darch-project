import React from "react";
import {LoggerFactory} from "darch/src/utils";
import i18n from "darch/src/i18n";
import styles from "./styles";

let Logger = new LoggerFactory("field.error", {level:"error"});

export default class FieldError extends React.Component {
    /** React properties **/
    static displayName = "field.error";

    static defaultProps = {};

    static propTypes = {
        for: React.PropTypes.string.isRequired,
        validator: React.PropTypes.string.isRequired,
        message: React.PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            active: false
        };
    }

    /**
     * LYFECICLE : This function is called when component
     * got mounted in the view.
     */
    componentDidMount() {
        let logger = Logger.create("componentDidMount");
        logger.info("enter");

        if(this.props.form) {
            this.props.form.addFieldError(this);
        }
    }

    /**
     * LYFECICLE : This function is called when component
     * got updated (props or state).
     */
    componentDidUpdate() {
        let logger = Logger.create("componentDidUpdate");
        logger.info("enter");
    }

    /**
     * LYFECICLE : This function is called when component
     * is ready to get unmounted from the view.
     */
    componentWillUnmount() {
        let logger = Logger.create("componentWillUnmount");
        logger.info("enter");

        if(this.props.form) {
            this.props.form.removeFieldError(this);
        }
    }

    /**
     * This function is responsible for generating the component's view.
     */
    render() {
        return this.state.active ? (
            <div className={styles.main}>
                <i18n.Translate text={this.props.message} />
            </div>
        ) : null;
    }
}
