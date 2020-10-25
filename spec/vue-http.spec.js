let ajaxSetup = require('../dist/vue-http.umd.js').$ajaxSetup;
const get = require('../dist/vue-http.umd.js').$get;

describe('setGlobals', function() {
    it('preserves settings', function() {
        let config = ajaxSetup({baseURL:"https://jsonplaceholder.typicode.com"});
        expect(config.baseURL).toEqual("https://jsonplaceholder.typicode.com");
    });
});

describe('get resources', function() {
    it('return a response', function(done) {
        get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            done();
            expect(response).toBeDefined();
        });
    });
});