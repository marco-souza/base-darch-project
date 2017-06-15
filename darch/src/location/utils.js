import LoggerFactory from "darch/src/utils/logger";

let Logger = new LoggerFactory("location.utils");

export default class Utils {
    static getCurrentLocation() {
        var logger = Logger.create("getCurrentLocation");
        logger.info("enter");

        return new Promise((resolve, reject) => {
            if(!navigator.geolocation) {
                logger.error("geolocation not supported");
                return reject(new Error("geolocation not supported"));
            }

            navigator.geolocation.getCurrentPosition((location) => {
                logger.debug("geolocation getCurrentPosition success", location);
                resolve(location);
            });
        });
    }
}