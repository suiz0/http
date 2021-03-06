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
    return Factory.getInstance().ajax(url, Object.assign({method: 'post', 'data': data}, config));
}

export let $http = HttpClient;
export let $ajaxSetup = ajaxSetup;
export let $get = get; 
export let $post = post;
