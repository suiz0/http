let response = {
    get: {
        posts: [
            {
                id: 1,
                description: 'Post 1',
                created: '02.23.2021',
                user: 'user 1',
                userid: 1
            },
            {
                id: 3,
                description: 'Post 2',
                created: '02.23.2021',
                user: 'user 3',
                userid: 3
            }
        ]
    },
    post: {
        new: {
            id: 4,
            description: '',
            user: 'user 3',
            userid:3
        }
    }
};

module.exports = response;