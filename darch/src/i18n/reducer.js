import {handleActions} from "redux-actions";
import LoggerFactory from "darch/src/utils/logger";

let Logger = new LoggerFactory("i18n.reducer", {level:"debug"});

let initialState = {
    spec: {dictionary: {}}
};

export default handleActions({
    i18NInit_COMPLETED(state, action) {
        let logger = Logger.create("I18N_INIT_COMPLETED");
        logger.info("enter", {state: state, action: action});

        return {spec: action.payload};
    }
}, initialState);
