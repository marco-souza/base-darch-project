import lodash from "lodash";
import {LoggerFactory} from "darch/src/utils";

let Logger = new LoggerFactory("validators", {level:"error"});
let emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

export let Validators = {
    $required: {
        validate: (value) => {
            let logger = Logger.create("required");
            logger.info("enter", {value});

            return !lodash.isEmpty(value);
        }
    },

    $email: {
        validate: (value) => {
            let logger = Logger.create("email");
            logger.info("enter", {value});

            if(!value){return true;}
            return emailRegex.test(value);
        }
    },

    $alphanumeric: {
        validate: (value) => {
            let logger = Logger.create("alphanumeric");
            logger.info("enter", {value});

            return (/^[a-zA-Z0-9]*$/).test(value);
        }
    },

    $digits: {
        validate: (value) => {
            let logger = Logger.create("digits");
            logger.info("enter", {value});

            return (/^[0-9]*$/).test(value);
        }
    },

    $lowercase: {
        validate: (value) => {
            let logger = Logger.create("lowercase");
            logger.info("enter", {value});

            return (/^[a-z0-9]*$/).test(value);
        }
    },

    $uppercase: {
        validate: (value) => {
            let logger = Logger.create("uppercase");
            logger.info("enter", {value});

            return (/^[A-Z0-9]*$/).test(value);
        }
    },

    $domain: {
        validate: (value) => {
            let logger = Logger.create("domain");
            logger.info("enter", {value});

            return (/^[a-zA-Z0-9_]+$/).test(value);
        }
    },

    $equal: {
        watch: [0],   // opts indexes of watch field names
        validate: (value, opts=[], context={}) => {
            let logger = Logger.create("equal");
            logger.info("enter", {value,opts,context});

            let values = context.values||{};

            if(opts.length && !lodash.isEqual(value, values[opts[0]])) {
                return false;
            }

            return true;
        }
    }
};

export function validate(name, value, opts, context) {
    let logger = Logger.create("validate");
    logger.info("enter", {name, value, opts});

    if(Validators[name]) {
        return Promise.resolve(Validators[name].validate(value, opts, context));
    }

    return Promise.resolve(true);
}
