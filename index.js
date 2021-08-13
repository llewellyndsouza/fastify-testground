const PORT = process.env.PORT | 3000;

const fastify = require("fastify")({
  logger: true,
});

const opts = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          hello: { type: "string" },
          another: { type: "string" },
        },
      },
    },
  },
};

fastify.get("/", opts, async (request, reply) => {
  return { hello: "world", another: "one bites the dust", three: "foursecret" };
});

fastify.get("/test", opts, async (request, reply) => {
    reply.status(400);
  });

fastify.listen(PORT, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`Server listening on ${address}`);
});
