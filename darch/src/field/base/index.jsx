import React from "react";
import lodash from "lodash";
import {LoggerFactory} from "darch/src/utils";
//import styles from "./styles";

let Logger = new LoggerFactory("field.base", {level:"error"});

export default (Component) => {
    console.log(["COMPONENT", Component]);
    
    class Compose extends React.Component {
        /** React properties **/
        static displayName = "field.base";

        static defaultProps = {
            validators: [],
            onChange: () => {},
            onBlur: () => {},
            onFocus: () => {},
            size: 1
        };

        static propTypes = {
            validators: React.PropTypes.oneOfType([
                React.PropTypes.string,
                React.PropTypes.arrayOf(
                    React.PropTypes.oneOfType([
                        React.PropTypes.string,
                        React.PropTypes.shape({
                            name: React.PropTypes.string.isRequired,
                            on: React.PropTypes.oneOf(["change","blur"]),
                            watch: React.PropTypes.oneOfType([
                                React.PropTypes.string,
                                React.PropTypes.arrayOf(React.PropTypes.string)
                            ]),
                            validate: React.PropTypes.func.isRequired
                        })
                    ])
                )
            ]),
            name: React.PropTypes.string.isRequired,
            isValidMap: React.PropTypes.object,
            onChange: React.PropTypes.func,
            onBlur: React.PropTypes.func,
            onFocus: React.PropTypes.func,
            size: React.PropTypes.number
        };

        /**
         * This function constructs a new instance of the component.
         */
        constructor(props) {
            let logger = Logger.create("constructor");
            logger.info("enter", {
                hasForm: !!props.form,
                hasOi: !!props.oi
            });

            super(props);

            this.state = {};

            // If this field got a parent form, then the parent
            // form gonna manage the field value.
            if(props.form) {
                this.state.value = props.value;
                this.state.isValidMap = {};
            }
        }

        /**
         * LYFECICLE : This function is called when component
         * got mounted in the view.
         */
        componentDidMount() {
            let logger = Logger.create("componentDidMount");
            logger.info("enter", {
                hasForm: !!this.props.form
            });

            if(this.props.form) {
                this.props.form.addField(this);
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
                this.props.form.removeField(this);
            }
        }

        /**
         * This function handle field value change.
         */
        onChange(value) {
            // If there is a parent form, then parent form is responsible
            // form manage this field value.
            if(this.props.form) {
                this.props.form.onFieldChange(this, value);
            }
            // Otherwise let parent component to manage the value.
            else {
                this.props.onChange(value);
            }
        }

        /**
         * This function handle field blur.
         */
        onBlur() {
            // Notify parent form that field got blured.
            if(this.props.form) {
                this.props.form.onFieldBlur(this, () => {
                    this.props.onBlur();
                });
            }
            else {
                this.props.onBlur();
            }
        }

        /**
         * This function handle field focus.
         */
        onFocus() {
            // Notify parent form that field got focused.
            if(this.props.form) {
                this.props.form.onFieldFocus(this, () => {
                    this.props.onFocus();
                });
            }
            else {
                this.props.onFocus();
            }
        }

        /**
         * This function is responsible for generating the component's view.
         */
        render() {
            let value = this.props.form ?
                this.state.value :
                this.props.value;

            let isValid = true,
                isValidMap = this.props.form ?
                    this.state.isValidMap :
                    this.props.isValidMap;

            // Evaluate isValid on base of isValidMap.
            for(let valid of lodash.values(isValidMap||{})) {
                if(!valid) {isValid = false; break;}
            }

            let props = lodash.assign({}, this.props, {
                value: value,
                onChange: this.onChange,
                onBlur: this.onBlur,
                onFocus: this.onFocus,
                isValid: isValid,
                size: this.props.size,
                validating: this.state.validating
            });

            return (
                <span>
                    <Component {...props} />
                </span>
            );
        }
    }

    return Compose;
};
