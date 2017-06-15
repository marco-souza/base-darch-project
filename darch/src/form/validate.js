import lodash from "lodash";
import {LoggerFactory} from "darch/src/utils";
import {validate} from "./validators";

let Logger = new LoggerFactory("form.validate", {level:"error"});

function evalObjectValidator(validator, field, values, opts) {
    let logger = Logger.create("evalObjectValidator");
    logger.info("enter", {validator, values, opts});

    let context = {values};
    let {name, on} = validator;
    let promise;

    on = on?lodash.flatten([on]):null;

    logger.debug("name", {name});

    // Use own validator on event to perform
    // validation or inherits from form validateOn.
    if(
        (opts.event && on &&
        on.indexOf(opts.event) < 0)||
        (opts.event && !on &&
        opts.validateOn != opts.event)
    ) {
        logger.info("NOT THE TEMPLE", {name});

        promise = Promise.resolve({
            name,
            valid: field.state.isValidMap[name]
        });
    }
    else {
        logger.info("IS THE TEMPLE", {name});

        promise = Promise.resolve(
            validator.validate(field.state.value, context)
        )
        .then((valid) => {
            logger.debug(`validator ${name} result`, {valid});
            return {name, valid};
        })
        .catch((error) => {
            logger.error("validator error", error);
            return {name, valid: false};
        });
    }

    return promise;
}

function evalStringValidator(validator, field, values, opts) {
    let logger = Logger.create("evalStringValidator");
    logger.info("enter", {validator});

    let vopts = validator.split(":");
    let name = vopts.shift();
    let promise;
    let context = {values};

    logger.debug("validator is string", {validator,name,vopts});

    if(opts.event 
    && opts.validateOn 
    && opts.validateOn != opts.event) { 
        promise = Promise.resolve({
            name,
            valid: field.state.isValidMap[name]
        });
    }
    else {
        promise = validate(name, field.state.value, vopts, context)
        .then((valid) => {
            logger.debug(`validator ${name}`, {valid});
            return {name, valid};
        })
        .catch((error) => {
            logger.error("validator error", error);
            return {name: name, valid: false};
        });
    }

    return promise;
}

/**
 * This function validates a field where validators is an array
 * os strings or objects.
 */
function validateFromArray(field, values, opts) {
    let logger = Logger.create("validateFromArray");

    logger.info("enter", {
        name: field.props.name,
        validators: field.props.validators,
        values: values,
        event: opts.event,
        validateOn: opts.validateOn
    });

    let promises = [];

    for(let validator of field.props.validators) {
        if(lodash.isString(validator)) {
            promises.push(
                evalStringValidator(
                    validator,
                    field,
                    values,
                    opts
                )
            );
        }
        else if(lodash.isObject(validator)) {
            let {name} = validator;

            if(!lodash.isFunction(validator.validate)
            || lodash.isEmpty(name)) { continue; }

            promises.push(
                evalObjectValidator(
                    validator,
                    field,
                    values,
                    opts
                )
            );
        }
    }

    return Promise.all(promises).then((results) => {
        let map = lodash.reduce(results, (map, result) => {
            logger.debug("isValidMap : reduce", {map, result});

            map[result.name] = result.valid;
            return map;
        }, {});

        logger.debug("isValidMap", {results, map});

        return map;
    });
}

/**
 * This function validates a field where validators props is
 * a string in the form: "VALIDATOR_1:OPTS|...|VALIDATOR_n:OPTS"
 */
function validateFromString(field, values, opts) {
    let logger = Logger.create("validateFromString");

    logger.info("enter", {
        name: field.props.name,
        validators: field.props.validators,
        values: values,
        event: opts.event,
        validateOn: opts.validateOn
    });

    // Validate if and only if the current event name is the
    // same as form validateOn event name.
    if(opts.event 
    && opts.validateOn 
    && opts.validateOn != opts.event) {
        return Promise.resolve(field.state.isValidMap);
    }

    let validators = field.props.validators.split("|");
    let promises = [];

    lodash.forEach(validators, (validator, idx) => {
        logger.debug(`validator ${idx}`, {validator});

        promises.push(
            evalStringValidator(
                validator,
                field,
                values,
                opts
            )
        );
    });

    return Promise.all(promises).then((results) => {
        let map = lodash.reduce(results, (map, result) => {
            logger.debug("isValidMap : reduce", {map, result});

            map[result.name] = result.valid;
            return map;
        }, {});

        logger.debug("isValidMap", {results, map});

        return map;
    });
}

export default function(field, values, opts = {}) {
    let logger = Logger.create("validate");
    logger.info("enter", {
        name: field.props.name,
        validators: field.props.validators,
        values: values
    });

    if(lodash.isString(field.props.validators)) {
        return validateFromString(field, values, opts);
    }
    else if(lodash.isArray(field.props.validators)) {
        return validateFromArray(field, values, opts);
    }

    return Promise.resolve({});
}
