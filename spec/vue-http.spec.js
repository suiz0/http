let vHttp = require('../dist/vue-http.umd.js');

describe('setGlobals', function() {
    const ajaxSetup = require('../dist/vue-http.umd.js').$ajaxSetup;
    it('preserves settings', function() {
        let config = vHttp.$ajaxSetup({baseURL:"https://jsonplaceholder.typicode.com"});
        expect(config.baseURL).toEqual("https://jsonplaceholder.typicode.com");
    });
});

describe('get resources', function() {
    it('return a response', function(done) {
        vHttp.$get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            done();
            expect(response).toBeDefined();
        });
    });
});