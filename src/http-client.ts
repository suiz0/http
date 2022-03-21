import axios, { AxiosInstance } from 'axios';

class HttpClient {
    private http: AxiosInstance;

    public static defaultSettings = {
        method: 'get'
    };

    public settings: any;

    constructor(options) {
        this.settings = this.parseOptions(HttpClient.defaultSettings, options);
        this.http = axios.create(this.settings);
    }

    public ajax(url: string, options) {
        var conf = this.parseOptions(this.settings, options);
        return this.http(url, conf);
    }

    public extend(configFn: (axios: AxiosInstance) => {}) {
        configFn(this.http);
    }

    private parseOptions(base, options): any {
        return Object.assign({}, base, options || {});
    }
}

export default HttpClient;