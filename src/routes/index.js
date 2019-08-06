// Import our Controllers
const userController = require('../controllers/userController')

// Import Swagger documentation
const documentation = require('./documentation/userApi')

const routes = [{
        method: 'GET',
        url: '/api/users',
        handler: userController.getUsers,
        schema: documentation.getUserSchema
    },
    {
        method: 'GET',
        url: '/api/users/:id',
        handler: userController.getSingleUser,
        schema: documentation.getUserByIdSchema
    },
    {
        method: 'POST',
        url: '/api/users',
        handler: userController.addUser,
        schema: documentation.addUserSchema
    },
    {
        method: 'PUT',
        url: '/api/users/:id',
        handler: userController.updateUser
    },
    {
        method: 'DELETE',
        url: '/api/users/:id',
        handler: userController.deleteUser
    }
]

module.exports = routes