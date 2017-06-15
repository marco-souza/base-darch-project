import axios from "axios";
import LoggerFactory from "darch/src/utils/logger";
import Storage from "darch/src/utils/storage";
import qs from "qs";

let Logger = new LoggerFactory("utils.http");

/**
 * Main class definition.
 */
export default class Http {
    constructor({
        baseUrl = "",
        shared = false,
        authTokenKey = "@authToken",
        authHeaderKey = "Authorization",
        authHeaderValueParser = (token) => `Bearer ${token}`
    } = {}) {
        if(shared){Http.shared = this;}

        this.storage = new Storage();
        this.baseUrl = baseUrl.replace(/^(.+)\/$/, "$1");
        this.authTokenKey = authTokenKey;
        this.authHeaderKey = authHeaderKey;
        this.authHeaderValueParser = authHeaderValueParser;
    }

    /****************************************************************
    * Instance methods
    ****************************************************************/
    async getAuthToken() {
        return await this.storage.get(this.authTokenKey);
    }

    async setAuthToken(token) {
        return await this.storage.set(this.authTokenKey, token);
    }

    async request(method, url, data, {
        headers = {}
    } = {}) {

        let logger = Logger.create("request");
        url = `${ this.baseUrl }/${ url.replace(/^\/(.+)$/, "$1") }`;

        logger.info("enter", {
            method,
            url,
            data
        });

        let reqOpts = {
            url,
            headers,
            method: method.toUpperCase(),
            paramsSerializer: function(params) {
                return qs.stringify(params);
            }
        };

        if(data) {
            if(reqOpts.method == "GET"){ reqOpts.params = data; }
            else { reqOpts.data = data; }
        }

        // Auth token
        try {
            let token = await this.getAuthToken();
            reqOpts.headers[this.authHeaderKey] = this.authHeaderValueParser(token);

            logger.debug("getAuthToken success", {token});
        }
        catch(error) {
            logger.error("getAuthToken error", error);
        }

        // Send request
        return axios(reqOpts)
        .then((response) => {
            logger.debug("response", response);
            return response.data;
        });
    }
}
