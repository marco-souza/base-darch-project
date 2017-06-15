import moment from "moment";
import crypto from "crypto";
import lodash from "lodash";

class Logger {
    static levelOrder = ["silly","debug","verbose","info","warn","error"];

    constructor(scope = "", trackId = null, opts = {}) {
        this.scope = scope;
        this.opts = opts;
        this.trackId = trackId || crypto.randomBytes(20).toString("hex");
        this.initialMoment = moment();
    }

    /**
     * This function prints an arbitrary level log.
     */
    print(level = "info", message = "", data = {}) {
        // Disable in production
        if(process.env.NODE_ENV == "production") {return;}

        const namespace = this.opts.namespace;
        const dataStr = JSON.stringify(data);
        const scope = this.scope;
        const levelUpper = level.toUpperCase();

        // Only log high order level.
        if(Logger.levelOrder.indexOf(level) < Logger.levelOrder.indexOf(this.opts.level)) {
            return;
        }

        message = `${levelUpper} - [${namespace}] ${scope} : ${message}`;

        // Parse log level
        level = ["silly","debug","verbose"].indexOf(level)>=0?"log":level;

        // debug,error,log,warn,info
        console[level](message, JSON.stringify({
            service_name: this.opts.service_name,
            service_index: process.env.NOMAD_ALLOC_INDEX||process.env.SERVICE_INDEX||0,
            hostname: process.env.HOSTNAME,
            namespace: namespace,
            scope: scope,
            level: level.toUpperCase(),
            trackId: this.trackId,
            elapsed: moment().diff(this.initialMoment),
            data: dataStr
        }));
    }

    silly(msg,data){ this.print("silly", msg, data); }
    debug(msg,data){ this.print("debug", msg, data); }
    verbose(msg,data){ this.print("verbose", msg, data); }
    info(msg,data){ this.print("info", msg, data); }
    warn(msg,data){ this.print("warn", msg, data); }
    error(msg,data){ this.print("error", msg, data); }
}

/**
 * This class defines a logger facotory.
 */
export default class LoggerFactory {
    constructor(namespace, opts = {}) {
        this.opts = lodash.merge({}, {
            logstashWinstonHost: LoggerFactory.logstashWinstonHost,
            service_name: LoggerFactory.service_name,
            namespace: namespace,
            disabled: false,
            level: process.env.NODE_ENV=="development"?"debug":"info"
        }, opts);
    }

    create(scope, trackId) {
        return new Logger(scope, trackId, this.opts);
    }

    /**
     * This function returns it's secret value only if app is no running in
     * production mode.
     *
     * @param  {string} value
     *     The secret value to be conditionally returned.
     */
    secret(value) {
        return process.env.NODE_ENV!="production"?value:undefined;
    }
}
