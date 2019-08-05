// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
})

// Require external modules
const mongoose = require('mongoose')

// Require cors
const cors = require('cors')
fastify.use(cors())

// Require body-parser
const bodyParser = require('body-parser')
fastify.use(bodyParser.json())
fastify.use(bodyParser.urlencoded({ extended: true }))

// Require routes
const routes = require('./app/routers')
routes.forEach((route, index) => {
    fastify.route(route)
});

// Import Swagger Options
const swagger = require('./config/swagger')

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)

// Declare a route
fastify.get('/', async(request, reply) => {
    return { hello: 'world' }
})

// Run the server
const start = async() => {
    try {
        // Connect to database
        mongoose.connect('mongodb://localhost/api')
            .then(() => console.log('MongoDB connected…'))
            .catch(err => console.log(err))
        await fastify.listen(3000)
        fastify.swagger
        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()