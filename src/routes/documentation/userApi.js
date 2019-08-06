exports.addUserSchema = {
    description: 'Create a new user',
    tags: ['Users'],
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
    tags: ['Users'],
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
    tags: ['Users'],
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

exports.updateUserSchema = {
    description: 'Update a single user',
    tags: ['Users'],
    summary: 'Update a single user',
    body: {
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

exports.deleteUserByIdSchema = {
    description: 'Delete single user by id',
    tags: ['Users'],
    summary: 'Delete single user by id',
    body: {
        type: 'object',
        properties: {
            _id: { type: 'string' }
        }
    },
    response: {
        200: {
            description: 'Successful deleted',
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