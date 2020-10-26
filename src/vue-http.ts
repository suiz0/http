import axios, { AxiosInstance } from 'axios';

class HttpClient {
    config = {
        method: 'get'
    };

    http: AxiosInstance;

    constructor(config)
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

let HttpSingletonFactory: {instance: HttpClient | null, config: Object, setConfig: Function, getInstance: Function } = {
    instance: null,
    config: {
        method: 'get'
    },
    setConfig(config) {
        this.config = config;
        this.instance = null;
    },
    getInstance() {
        if(this.instance === null)
        {
            this.instance = new HttpClient(this.config);
        }

        return this.instance;
    }
}

// facade for ajaxSetup
function ajaxSetup(config) {
    HttpSingletonFactory.setConfig(config);
    return HttpSingletonFactory.config;
}

// facade for get request
function get(url: string, config) 
{
    return HttpSingletonFactory.getInstance().ajax(url, config);
}

// facade for post request
function post(url: string, config) 
{
    return HttpSingletonFactory.getInstance().ajax(url, Object.assign({method: 'post'}, config));
}

export let $http = HttpClient;
export let $ajaxSetup = ajaxSetup;
export let $get = get; 
export let $post = post;