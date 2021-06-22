import HttpClient from './http-client';
import Factory from './factory';

// facade for ajaxSetup
function ajaxSetup(config) {
    Factory.getInstance(config);
    return Factory.getConfig();
}

// facade for get request
function get(url: string, config) 
{
    return Factory.getInstance().ajax(url, config);
}

// facade for post request
function post(url: string, data, config) 
{
    return Factory.getInstance().ajax(url, Object.assign(config || {}, {method: 'post', 'data': data}));
}

function del(url: string, config)
{
    return Factory.getInstance().ajax(url, Object.assign(config || {}, {method: 'delete'}));
}

function put(url: string, data, config) 
{
    let options = {
        method: 'put',
        data: data
    };

    return Factory.getInstance().ajax(url, Object.assign(config || {}, options));
}


// vue plugin def
export let plugin = {
    install: function(vue, options?) {
        vue.$ajaxSetup = ajaxSetup;
        vue.$get = get;
        vue.$post = post;
        vue.$del = del;
        vue.$put = put;
    }
};

export let $http = HttpClient;
export let $ajaxSetup = ajaxSetup;
export let $get = get; 
export let $post = post;
export let $del = del;
export let $put = put;