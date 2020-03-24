var ajaxSettings = require('../dist/vue-http.js').$ajaxSetup;
const get = require('../dist/vue-http.js').$get;

describe('setGlobals', function() {
    it('preserves settings', function(done) {
       ajaxSettings.set({baseURL:"https://jsonplaceholder.typicode.com"});

       get('posts')
       .then((response) => {
           done();
           expect(response).toBeDefined();
           expect(response.data).toBeDefined();
       });
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