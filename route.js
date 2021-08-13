async function routes(fastify, options) {
  fastify.get("/", (request, reply) => {
    return { hello: "world!" };
  });
}

module.exports = routes;
