var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "axios"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const axios_1 = __importDefault(require("axios"));
    class VueHttp {
        constructor(config) {
            this.config = {
                method: 'get'
            };
            this.http = axios_1.default.create(config);
        }
        ajax(url, config) {
            var conf = this.parseOptions(config);
            return this.http(url, config);
        }
        parseOptions(options) {
            return Object.assign({}, this.config, options || {});
        }
    }
    let ajaxSetup = {
        instance: null,
        config: {
            method: 'get'
        },
        set(config) {
            this.config = config;
            this.instance = null;
        },
        getInstance() {
            if (this.instance === null) {
                this.instance = new VueHttp(this.config);
            }
            return this.instance;
        }
    };
    // facade for get request
    function get(url, config) {
        return ajaxSetup.getInstance().ajax(url, Object.assign({ method: 'get' }, config));
    }
    // facade for post request
    function post(url, config) {
        return ajaxSetup.getInstance().ajax(url, Object.assign({ method: 'post' }, config));
    }
    exports.vHttp = VueHttp;
    exports.$ajaxSetup = ajaxSetup;
    exports.$get = get;
    exports.$post = post;
});
