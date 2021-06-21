import http from './http-client';

const HttpSingletonFactory = (function() {
    var instance;

    function init(config?) {
        return new http(config);
    }

    return {
        getConfig: function() {
            return instance? instance.settings : null;
        },
        getInstance: function(config?) {
            if(!instance || config) {
                instance = init(config);
            }

            return instance;
        }
    };
})();


export default HttpSingletonFactory;