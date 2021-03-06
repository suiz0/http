let vHttp = require('../dist/vue-http.umd.js');
let nock = require('nock');
let response = require('./javascripts/helpers/responses');

describe('setGlobals', function() {
    const ajaxSetup = require('../dist/vue-http.umd.js').$ajaxSetup;
    it('preserves settings', function() {
        let config = vHttp.$ajaxSetup({baseURL:"https://jsonplaceholder.typicode.com"});
        expect(config.baseURL).toEqual("https://jsonplaceholder.typicode.com");
    });
});

describe('GET resources', function() {
    it('requests resource list and returns a success response', function(done) {

        nock('https://jsonplaceholder.typicode.com')
        .get('/posts')
        .reply(200, response.get.posts);

        vHttp.$get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            expect(response).toBeDefined();
            expect(response.data).toBeDefined();
            expect(response.data.length).toEqual(2);
            done();
        });
    });

    afterEach(function() {
        nock.cleanAll();
    });
});

describe('POST resources', function() {
    it('sends body content and returns a success response', function(done) {
        nock('https://jsonplaceholder.typicode.com')
        .post('/posts', {
            'description': 'New Post'
        })
        .reply(200, response.post.new);

        vHttp.$post('https://jsonplaceholder.typicode.com/posts', {
            'description': 'New Post'
        })
        .then(function(response) {
            expect(response).toBeDefined();
            expect(response.data.id).toBeDefined();

            done();
        });
    });

    afterEach(function() {
        nock.cleanAll();
    });
});