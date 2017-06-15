import lodash from "lodash";
import {Validators} from "./validators";

function processObjectValidator(
    validator, 
    field,
    fieldWatchers = {}, 
    watchingFields = []
) {
    if(!validator.watch) {return;}

    let validatorWatch = lodash.flatten([validator.watch]);
    let watchedFieldNames = [];

    for(let watch of validatorWatch) {
        if(lodash.isString(watch)) {
            watchedFieldNames.push(watch);
        }
    }

    for(let fieldName of watchedFieldNames) {
        fieldWatchers[fieldName] = fieldWatchers[fieldName]||[];
        fieldWatchers[fieldName].push(field.props.name);
        watchingFields.push(fieldName);
    }
}

function processStringValidator(
    validator, 
    field,
    fieldWatchers = {}, 
    watchingFields = []
) {
    let opts = validator.split(":");
    let validatorName = opts.shift();
    let watchedFieldNames = [];
    let validatorWatch = lodash.get(Validators, `${validatorName}.watch`);

    if(!lodash.isUndefined(validatorWatch)) {
        validatorWatch = lodash.flatten([validatorWatch]);

        for(let watch of validatorWatch) {
            // If watch is number, then it represents the index
            // of opts that contains the watched field name.
            if(lodash.isNumber(watch)) {
                if(watch >= 0 && watch < opts.length) {
                    watchedFieldNames.push(opts[watch]);
                }
            }
            // If watch is string, then it is the watched field
            // name.
            else if(lodash.isString(watch)) {
                watchedFieldNames.push(watch);
            }
        }
    }

    for(let fieldName of watchedFieldNames) {
        fieldWatchers[fieldName] = fieldWatchers[fieldName]||[];
        fieldWatchers[fieldName].push(field.props.name);
        watchingFields.push(fieldName);
    }
}

export default function(field, fieldWatchers={}) {
    let watchingFields = [];
    let validators = field.props.validators;

    if(lodash.isString(validators)) {
        validators = validators.split("|");

        // Process field validators that require watch
        // other fields.
        for(let validator of validators) {
            processStringValidator(
                validator,
                field,
                fieldWatchers,
                watchingFields
            );
        }
    }
    else if(lodash.isArray(validators)) {
        for(let validator of validators) {
            if(lodash.isString(validator)) {
                processStringValidator(
                    validator,
                    field,
                    fieldWatchers,
                    watchingFields
                );
            }
            else if(lodash.isObject(validator)) {
                processObjectValidator(
                    validator,
                    field,
                    fieldWatchers,
                    watchingFields
                );
            }
        }
    }

    field.watchingFields = watchingFields;
}