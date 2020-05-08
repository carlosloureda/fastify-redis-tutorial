module.exports = function (fastify, opts, next) {

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
    next()
}
