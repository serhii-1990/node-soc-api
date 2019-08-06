exports.addUserSchema = {
    description: 'Create a new user',
    tags: ['users'],
    summary: 'Creates new user with given values',
    body: {
        type: 'object',
        properties: {
            userName: { type: 'string' },
            email: { type: 'string' },
            password: { type: 'string' },
            country: { type: 'string' },
            city: { type: 'string' },
            personalInfo: { type: 'object' }
        }
    },
    response: {
        200: {
            description: 'Successful response',
            type: 'object',
            properties: {
                _id: { type: 'string' },
                userName: { type: 'string' },
                email: { type: 'string' },
                password: { type: 'string' },
                country: { type: 'string' },
                city: { type: 'string' },
                personalInfo: { type: 'object' }
            }
        }
    }
}

exports.getUserSchema = {
    description: 'Get list of users',
    tags: ['users'],
    summary: 'Get list of users',
    response: {
        200: {
            description: 'Successful response',
            type: 'object',
            properties: {
                _id: { type: 'string' },
                userName: { type: 'string' },
                email: { type: 'string' },
                password: { type: 'string' },
                country: { type: 'string' },
                city: { type: 'string' },
                personalInfo: { type: 'object' }
            }
        }
    }
}

exports.getUserByIdSchema = {
    description: 'Get single user by id',
    tags: ['users'],
    summary: 'Get single user by id',
    body: {
        type: 'object',
        properties: {
            _id: { type: 'string' }
        }
    },
    response: {
        200: {
            description: 'Successful response',
            type: 'object',
            properties: {
                _id: { type: 'string' },
                userName: { type: 'string' },
                email: { type: 'string' },
                password: { type: 'string' },
                country: { type: 'string' },
                city: { type: 'string' },
                personalInfo: { type: 'object' }
            }
        }
    }
}