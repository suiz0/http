import axios, { AxiosInstance } from 'axios';

class HttpClient {
    public static defaultSettings = {
        method: 'get'
    };

    public settings: any;
    private http: AxiosInstance;

    constructor(options) {
        this.settings = this.parseOptions(HttpClient.defaultSettings, options);
        this.http = axios.create(this.settings);
    }

    public ajax(url: string, options) {
        var conf = this.parseOptions(this.settings, options);
        return this.http(url, conf);
    }

    private parseOptions(base, options): any {
        return Object.assign({}, base, options || {});
    }
}

export default HttpClient;