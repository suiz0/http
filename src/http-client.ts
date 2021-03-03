import axios, { AxiosInstance } from 'axios';

class HttpClient {
    public static defaultSettings = {
        method: 'get'
    };

    public settings: any;
    private http: AxiosInstance;

    constructor(baseConfig) {
        this.settings = this.parseOptions(baseConfig, HttpClient.defaultSettings);
        this.http = axios.create(this.settings);
    }

    public ajax(url: string, config) {
        var conf = this.parseOptions(config, this.settings);
        return this.http(url, conf);
    }

    private parseOptions(options, settings): any {
        return Object.assign({}, settings, options || {});
    }
}

export default HttpClient;