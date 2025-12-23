import fastify from "fastify";
import { ZodError } from "zod";
import { userRoutes } from "./http/controllers/users/routes";
import { env } from "./env";

export const app = fastify();

app.register(userRoutes);

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: "Validation error.", issues: error.format() });
  }

  if (env.NODE_ENV !== "production") {
    console.error(error);
  } else {
    // -TODO- Here we should log to an external tool like Datadog/NewRelic/Sentry
  }
});
