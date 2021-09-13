let vHttp = require('../dist/vue-http.umd.js');
let nock = require('nock');
let response = require('./javascripts/helpers/responses');

describe('setGlobals', function() {
    const ajaxSetup = require('../dist/vue-http.umd.js').$ajaxSetup;
    it('preserves settings', function() {
        const http = vHttp.$ajaxSetup({baseURL:"https://jsonplaceholder.typicode.com"});
        expect(http.settings.baseURL).toEqual("https://jsonplaceholder.typicode.com");
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

describe('DELETE resources', function() {
    var scope;
    beforeAll(function() {
       scope =  nock('https://jsonplaceholder.typicode.com')
        .delete('/posts/1')
        .reply(200);

        scope.delete('/posts/2')
        .reply(200);
    });

    it('sends delete request successfully', function(done) {
        vHttp.$del('https://jsonplaceholder.typicode.com/posts/1')
        .then(function(response) {
            expect(response).toBeDefined();
            expect(response.status).toBeDefined();
            expect(response.status).toEqual(200);

            done();
        });
    });

    it('honors custom headers', function(done) {
        vHttp.$del('https://jsonplaceholder.typicode.com/posts/2', {
            headers: {
                'Authorization': 'Basic YWxhZGRpbjpvcGVuc2VzYW1l'
            }
        })
        .then(function(response) {
            expect(response).toBeDefined();
            expect(response.status).toBeDefined();
            expect(response.status).toEqual(200);

            expect(response.config.headers.Authorization).toBeDefined();
            expect(response.config.headers.Authorization).toEqual('Basic YWxhZGRpbjpvcGVuc2VzYW1l');
            done();
        });
    });

    it('catches error when request fails', function(done) {
        vHttp.$del('https://jsonplaceholder.typicode.com/posts/3')
        .catch(function(response) {
            expect(response).toBeDefined();
            expect(response.status).toBeDefined();
            expect(response.status).toEqual(404);

            done();
        });
    });

    afterAll(function() {
        nock.cleanAll();
    });
});

describe('PUT resources', function() {
    beforeAll(function() {
        scope =  nock('https://jsonplaceholder.typicode.com')
        .put('/posts/3', {
            ...response.put.update
        })
        .reply(200, {
            ...response.put.update
        });

        scope.put('/posts/3', {
            ...response.put.update
        }, {
            'Location': 'index.html'
        })
        .reply(200);

    });

    it('sends request succesfully', function(done) {
        let obj = {
            ...response.get.posts[1]
        };

        obj.description = 'Desc update';
        vHttp.$put('https://jsonplaceholder.typicode.com/posts/3', obj)
        .then( response => {
            expect(response).toBeDefined();
            expect(response.status).toEqual(200);
            expect(response.data).toBeDefined();
            done();
        });
    });

    it('honors custom headers', function(done) {
        let obj = {
            ...response.get.posts[1]
        };

        obj.description = 'Desc update';
        vHttp.$put('https://jsonplaceholder.typicode.com/posts/3', obj, {
            'Location': 'index.html'
        })
        .then(response=> {
            expect(response).toBeDefined();
            expect(response.status).toEqual(200);
            done();
        });
    });

    afterAll(function() {
        nock.cleanAll();
    });
});