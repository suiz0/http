import axios, { AxiosInstance } from 'axios';

class VueHttp {
    config = {
        method: 'get'
    };

    http: AxiosInstance;

    constructor(config, axios)
    {
        this.http = axios.create(config);
    }

    ajax(url: string, config) {
        var conf = this.parseOptions(config);
        return this.http(url, config);
    }

    parseOptions(options) 
    {
        return Object.assign({}, this.config, options || {});
    }
}


let ajaxSetup: {instance: VueHttp| null, config: Object, set: Function, getInstance: Function } = {
    instance: null,
    config: {
        method: 'get'
    },
    set(config) {
        this.config = config;
        this.instance = null;
    },
    getInstance() {
        if(this.instance === null)
        {
            this.instance = new VueHttp(this.config, axios);
        }

        return this.instance;
    }
}

// facade for get request
function get(url: string, config) 
{
    return ajaxSetup.getInstance().ajax(url, Object.assign({method: 'get'}, config));
}

// facade for post request
function post(url: string, config) 
{
    return ajaxSetup.getInstance().ajax(url, Object.assign({method: 'post'}, config));
}

export let vHttp = VueHttp;
export let $ajaxSetup = ajaxSetup;
export let $get = get; 
export let $post = post;