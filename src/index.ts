import { Elysia, t } from "elysia";

const PORT = process.env.PORT || 3000;

const app = new Elysia()
  .decorate("appName", "Bun Is Good Init")
  .get("/", async (handler) => {
    console.log(handler.request.url, "handler");
    return { message: "Hey Hey" };
  })
  .listen(PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
