import {createActions} from "redux-actions";
import {LoggerFactory} from "darch/src/utils";
import lodash from "lodash";

let Logger = new LoggerFactory("toaster.actions", {level:"error"});

export default createActions({
    push(type, message) {
        let logger = Logger.create("push");
        logger.info("enter", {type: type, message: message});

        return {type: type, message: message, id: lodash.uniqueId()};
    },

    remove(data) {
        let logger = Logger.create("remove");
        logger.info("enter", {data: data});

        return data;
    }
});
