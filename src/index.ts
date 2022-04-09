import HttpClient from './http-client';
import Factory from './factory';

// facade for ajaxSetup
function ajaxSetup(config) {
    return Factory.getInstance(config);
}

// facade for get request
function get(url: string, config) {
    return Factory.getInstance().ajax(url, config);
}

// facade for post request
function post(url: string, data, config) {
    return Factory.getInstance().ajax(
        url,
        Object.assign(config || {}, { method: 'post', data: data })
    );
}

function del(url: string, config) {
    return Factory.getInstance().ajax(
        url,
        Object.assign(config || {}, { method: 'delete' })
    );
}

function put(url: string, data, config) {
    let options = {
        method: 'put',
        data: data,
    };

    return Factory.getInstance().ajax(
        url,
        Object.assign(config || {}, options)
    );
}

// vue plugin def
export default {
    install: function (vue, options?) {
        vue.ajaxSetup = ajaxSetup;
        vue.http = HttpClient;
        vue.prototype.$get = get;
        vue.prototype.$post = post;
        vue.prototype.$del = del;
        vue.prototype.$put = put;
    },
};
