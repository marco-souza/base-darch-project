import React from "react";
import lodash from "lodash";
import {LoggerFactory} from "darch/src/utils";
import validate from "./validate";
import {Validators} from "./validators";
import watch from "./watch";

let Logger = new LoggerFactory("form", {level:"error"});

/**
 * Main component class.
 */
export default class Component extends React.Component {
    /** React properties **/
    static displayName = "form";
    static defaultProps = {
        validateOn: "change",
        showErrorsOn: "blur",
        clearErrorOnBecomeValid: true,
        disableSubmitButtonOnErrors: true,
        disableSubmitButtonOnValidating: true,
        loading: false,
        onSubmit: () => {return Promise.resolve();},
        onChange: () => {}
    };
    static propTypes = {
        validateOn: React.PropTypes.oneOf([
            "change",
            "blur",
            "submit"
        ]),
        showErrorsOn: React.PropTypes.oneOf([
            "change",
            "blur",
            "submit"
        ]),
        clearErrorOnBecomeValid: React.PropTypes.bool,
        disableSubmitButtonOnErrors: React.PropTypes.bool,
        disableSubmitButtonOnValidating: React.PropTypes.bool,
        loading: React.PropTypes.bool,
        onSubmit: React.PropTypes.func
    };

    /**
     * This function register a new validator.
     */
    static registerValidator(validator) {
        if(!validator||!validator.name){return;}

        Validators[validator.name] = validator;
    }

    /** Nested components **/

    /**
     * Class instance constructor.
     */
    constructor(props) {
        super(props);

        // Instance properties
        this.fields = {};
        this.fieldErrors = {};
        this.fieldWatchers = {};
        this.values = {};
        this.submitCount = 0;
        this.state = {
            isValid: true
        };
    }

    /**
     * LYFECICLE : This function is called when component
     * got mounted in the view.
     */
    componentDidMount() {
        let logger = Logger.create("componentDidMount");
        logger.info("enter");
    }

    /**
     * This function process all field children.
     */
    processChildren(children) {
        if(!children){return;}

        let logger = Logger.create("processChildren");
        logger.info("enter");

        return React.Children.map(children, (component, idx) => {
            let displayName = lodash.get(component, "type.displayName");
            let oldChildren = lodash.get(component, "props.children");
            let newChildren, newProps = {};

            logger.info(`children map : ${idx}`, {type: displayName});

            switch (displayName) {
                case "field.base":
                case "field.error":
                case "button":
                    newProps.form = this;
                    break;
                default:
            }

            // Set disabled for submit button when form is invalid.
            if(displayName == "button"
            && component.props.type == "submit") {
                newProps.loading = this.props.loading;

                logger.info("found submit button", {
                    formIsValid: this.state.isValid
                });

                if(
                    (this.props.disableSubmitButtonOnErrors && 
                    !this.state.isValid) ||
                    (this.props.disableSubmitButtonOnValidating &&
                    this.state.validating)
                ) {
                    newProps.disabled = true;
                }
                if(this.props.disableSubmitButtonOnErrors) {
                    newProps.disabled = !this.state.isValid;
                }
            }

            // Process old children
            if(oldChildren) {
                newChildren = this.processChildren(oldChildren);
            }

            // Clone component with new props and children
            return newChildren||lodash.size(newProps)?
                React.cloneElement(component, newProps, newChildren) :
                component;
        });
    }

    /**
     * This function add a field to fields list.
     */
    addField(field) {
        let logger = Logger.create("addField");
        logger.info("enter", {
            name: field.props.name,
            value: field.state.value
        });

        this.fields[field.props.name] = field;
        this.values[field.props.name] = field.state.value;

        // Extract watch fields.
        watch(field, this.fieldWatchers);

        // Validate field.
        if(!field.props.preventValidateOnMount) {
            this.validateField(field);
        }
    }

    /**
     * This function removes a field from fields list.
     */
    removeField(field) {
        let logger = Logger.create("removeField");
        logger.info("enter", {
            name: field.props.name
        });

        // Remove field from all watching fields.
        for(let fieldName of field.watchingFields) {
            lodash.pull(this.fieldWatchers[fieldName], field.props.name);
        }

        delete this.fields[field.props.name];
        delete this.values[field.props.name];
    }

    /**
     * This function add an field error component.
     */
    addFieldError(errorCmp) {
        let logger = Logger.create("addFieldError");
        logger.info("enter", {
            for: errorCmp.props.for,
            validator: errorCmp.props.validator
        });

        let fieldErrors = this.fieldErrors[errorCmp.props.for]||{};
        fieldErrors[errorCmp.props.validator] = errorCmp;
        this.fieldErrors[errorCmp.props.for] = fieldErrors;
    }

    /**
     * This function remove an field error component.
     */
    removeFieldError(errorCmp) {
        let logger = Logger.create("removeFieldError");
        logger.info("enter", {
            for: errorCmp.props.for,
            validator: errorCmp.props.validator
        });

        let fieldErrors = this.fieldErrors[errorCmp.props.for]||{};
        delete fieldErrors[errorCmp.props.validator];
    }

    /**
     * This function validates a field value and updates
     * the valid state of this form.
     */
    validateField(field, opts = {}) {
        let logger = Logger.create(`validateField : ${field.props.name}`);
        logger.info("enter");

        this.setState({validating: true});
        field.setState({validating: true});

        return validate(field, this.values, lodash.assign({}, opts, {
            validateOn: this.props.validateOn
        })).then((isValidMap) => {
            logger.debug("validate completed", {
                isValidMap: isValidMap,
                stateIsValidMap: field.state.isValidMap
            });

            // Get list of validators the become valid and a list of
            // those that become invalid.
            let becomeValid = [];
            let becomeInvalid = [];
            let invalids = [];
            let valids = [];

            logger.debug("isValidMap keys", {keys: lodash.keys(isValidMap)});

            // Get the list of validators that become valid.
            for(let name of lodash.keys(isValidMap)) {
                logger.debug("isValidMap key", {key: name});

                if((lodash.isUndefined(field.state.isValidMap[name])||!field.state.isValidMap[name])
                && isValidMap[name]) {
                    becomeValid.push(name);
                }
                else if((lodash.isUndefined(field.state.isValidMap[name])||field.state.isValidMap[name])
                && !isValidMap[name]) {
                    becomeInvalid.push(name);
                }

                if(isValidMap[name]) {valids.push(name);}
                else { invalids.push(name); }
            }

            logger.info("become valid or invalid", {
                becomeValid, becomeInvalid
            });

            return new Promise((resolve) => {
                this.setState({validating: false});

                field.setState({isValidMap, validating: false}, () => {

                    // Clear errors.
                    if(becomeValid.length
                    && this.props.clearErrorOnBecomeValid) {
                        return this.updateFieldErrors(field, {
                            only: becomeValid
                        }).then(() => {
                            resolve({becomeValid, becomeInvalid});
                        });
                    }

                    resolve();
                });
            }).then(() => {
                // Validate form.
                return this.validateForm();
            });
        });
    }

    /**
     * This function validates all fields in the form.
     */
    validateForm() {
        let logger = Logger.create("validateForm");
        logger.info("enter");

        for(let fieldName of lodash.keys(this.fields)) {
            logger.debug("fieldName", {fieldName});

            let field = this.fields[fieldName];

            if(!field.state.isValidMap){
                logger.debug("does not have isValidMap");
                continue;
            }

            for(let name of lodash.keys(field.state.isValidMap)) {
                if(!field.state.isValidMap[name]) {
                    logger.info("isValidMap false field", {
                        isValidMap: field.state.isValidMap,
                        isValidMapForItem: field.state.isValidMap[name]
                    });

                    return new Promise((resolve) => {
                        this.setState({isValid: false}, resolve);
                    });
                }
            }
        }

        return new Promise((resolve) => {
            this.setState({isValid: true}, resolve);
        });
    }

    /**
     * This function updates field error components.
     */
    updateFieldErrors(field, opts = {}) {
        let logger = Logger.create("updateFieldErrors");
        logger.info("enter", {name: field.props.name});

        let isValidMap = field.state.isValidMap;
        let fieldErrors = this.fieldErrors[field.props.name]||{};
        let promises = [];

        logger.debug("isValidMaps", {
            isValidMap: field.state.isValidMap
        });

        for(let name of lodash.keys(isValidMap)) {

            logger.debug("isValidMap iteration", {
                name,
                valid: isValidMap[name]
            });

            if(
                !fieldErrors[name] ||
                (opts.only && opts.only.indexOf(name) < 0) ||
                (
                    // Prevent if the current event does not
                    // match the showOn prop of fieldError or the
                    // form showErrorsOn.
                    opts.event &&
                    (
                        (fieldErrors[name].props.showOn &&
                        fieldErrors[name].props.showOn != opts.event) ||
                    
                        (!fieldErrors[name].props.showOn && 
                        this.props.showErrorsOn != opts.event)
                    )
                )
            ) { continue; }

            promises.push(
                new Promise((resolve) => {
                    fieldErrors[name].setState({
                        active: !isValidMap[name]
                    }, resolve);
                })
            );
        }

        return Promise.all(promises).then((results) => {
            logger.debug("all components updated");
            return results;
        });
    }

    /**
     * This function handles field value change.
     */
    onFieldChange(field, value) {
        let logger = Logger.create(`onFieldChange : ${field.props.name}`);
        logger.info("enter", {value, hideErrorsOn: this.props.hideErrorsOn});

        let {values} = this;

        values[field.props.name] = value;

        field.setState({value}, () => {
            Promise.resolve()
            .then(() => {
                return this.validateField(field, {event: "change"});
            })
            .then(() => {
                return this.updateFieldErrors(field, {event: "change"});
            })
            .then(() => {
                // Validate all watchers.
                for(let fieldName of this.fieldWatchers[field.props.name]||[]) {
                    logger.debug("validate watching field", {fieldName});
                    this.validateField(this.fields[fieldName]);
                }
            });

            // Call on change
            this.props.onChange(values);
        });
    }

    /**
     * This function handles field blur.
     */
    onFieldBlur(field) {
        let logger = Logger.create(`onFieldBlur : ${field.props.name}`);
        logger.info("enter");

        field.blurCount=field.blurCount||0;
        field.blurCount++;

        Promise.resolve()
        .then(() => {
            return this.validateField(field, {event: "blur"});
        })
        .then(() => {
            return this.updateFieldErrors(field, {event: "blur"});
        });
    }

    /**
     * This function handles field focus.
     */
    onFieldFocus(field) {
        let logger = Logger.create(`onFieldFocus : ${field.props.name}`);
        logger.info("enter");
    }

    /**
     * This function handles submit event.
     */
    async onSubmit(evt) {
        let logger = Logger.create("onSubmit");
        logger.info("enter");

        evt.preventDefault();

        // Prevent submit when form is invalid or validating.
        if(!this.state.isValid
        ||this.state.validating) { return; }

        try {
            let resetFieldValues = await Promise.resolve(
                this.props.onSubmit(lodash.cloneDeep(this.values))
            );

            if(resetFieldValues) {
                this.values = lodash.assign({}, this.values, resetFieldValues);

                // Set state for fields.
                lodash.forOwn(resetFieldValues, (value, fieldName) => {
                    this.fields[fieldName].setState({value}, () => {

                        this.validateField(this.fields[fieldName])
                        .then(() => {
                            lodash.forOwn(this.fieldErrors[fieldName], (fieldError) => {
                                fieldError.setState({active: false});
                            });
                        });
                    });
                });
            }
        }
        catch(error) {
            logger.error("onSubmit error", error);
        }
    }

    render() {
        return (
            <form noValidate
                onSubmit={this.onSubmit}>
                {this.processChildren(this.props.children)}
            </form>
        );
    }
}
