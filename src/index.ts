import { Elysia, Handler, t } from "elysia";

const PORT = process.env.PORT || 3000;

const app = new Elysia();

const title = "Bun is good init";

app
  .decorate("appName", title)
  .get("/", async (handler) => {
    console.log(handler.request.url, "handler");
    return { message: "Hey Hey h" };
  })
  .listen(PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
