import {createActions} from "redux-actions";
import {LoggerFactory,Http} from "darch/src/utils";

let Logger = new LoggerFactory("i18n.actions", {level:"error"});
let http = new Http();

export default createActions({
    i18NInit(lang = "pt-br", {fallbackLang="pt-br", path="/assets/i18n"}={}) {
        var logger = Logger.create("init");
        logger.info("enter", {lang, fallbackLang});

        return http.request("GET", `${path}/${lang}.json`)
        .catch(() => {
            // Something went wrong : fetch fallback lang file.
            return http.request("GET", `${path}/${fallbackLang}.json`);
        });
    }
});
