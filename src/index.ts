import { Elysia, t } from "elysia";

const PORT = process.env.PORT || 3000;

const app = new Elysia();

const secretAppTitle: string = "Bun is good init";

app
  .decorate("secretAppName", secretAppTitle)
  .get("/", async (handler) => {
    console.log(handler.request.url, "handler");
    return { message: "Hey Hey h" };
  })
  .get("/post/:id", async ({ params: { id } }) => {
    return { id: id, title: "Learn or Burn" };
  })
  .listen(PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
