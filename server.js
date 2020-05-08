const fastify = require("fastify")({ logger: true })

// Basic route

// fastify.get("/", async (request, reply) => {
//     return { hello: 'world' }
// })


fastify.route({
    method: 'GET',
    url: '/',
    schema: {
        querystring: {
            name: { type: 'string' }
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    hello: { type: 'string' }
                }
            }
        }
    },
    preHandler: async (request, reply) => {
        // checks authentication
    },
    handler: async (request, reply) => {
        return { hello: 'world' }
    },
})

const start = async () => {

    try {
        await fastify.listen(3000)
        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (error) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()