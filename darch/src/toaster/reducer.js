import {handleActions} from "redux-actions";
import lodash from "lodash";
import {LoggerFactory} from "darch/src/utils";

let Logger = new LoggerFactory("toaster.reducer", {level:"error"});

let initialState = {
    toasts: []
};

export default handleActions({
    push(state, action) {
        let logger = Logger.create("push");
        logger.info("enter", {state: state, action: action});

        return {
            toasts: [
                ...state.toasts,
                action.payload
            ]
        };
    },

    remove(state, action) {
        let logger = Logger.create("remove");
        logger.info("enter", {state: state, action: action});

        let arr = lodash.pull(state.toasts, action.payload);

        logger.debug("new state", {state: state});

        return {
            toasts: lodash.clone(arr)
        };
    }
}, initialState);
