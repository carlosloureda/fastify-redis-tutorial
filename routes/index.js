
// TODO: Use fastify-autoload to upload this without index.js: https://github.com/fastify/fastify-autoload/pull/33

const routes = (fastify, opts, next) => {
    fastify.register(require('./routes'))
    fastify.register(require('./routes2'))
    next()
}
module.exports = routes