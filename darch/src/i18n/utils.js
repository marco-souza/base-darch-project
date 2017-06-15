import lodash from "lodash";
import hogan from "hogan.js";
import {LoggerFactory} from "darch/src/utils";

let Logger = new LoggerFactory("i18n.utils", {level:"debug"});

export default class Utils {
    static translate({
        spec={},
        text="",
        data={},
        parse=(t)=>{return t;},
        format=null
    } = {}) {
        let logger = Logger.create("translate");
        logger.info("enter", {text,data,spec});

        let translation = (lodash.get(spec, "dictionary")||{})[text] || text;
        logger.debug("translation 1", {translation});

        translation = hogan.compile(translation).render(data);
        logger.debug("translation 2", {translation});

        translation = parse(translation);
        logger.debug("translation 3", {translation});

        logger.debug("parsed translation", {translation});

        switch (format) {
            case "lower":
                translation = lodash.lowerCase(translation);
                break;
            case "upper":
                translation = lodash.upperCase(translation);
                break;
            case "capital":
                translation = lodash.capitalize(translation);
                break;
            case "camel":
                translation = lodash.camelCase(translation);
                break;
            default:
        }

        logger.info("leave", {translation: translation});

        return translation;
    }
}
