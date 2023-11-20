import { Elysia, Handler, t } from "elysia";
import figlet from "figlet";

const server = Bun.serve({
  port: 3888,
  fetch(request, server) {
    const body = figlet.textSync("Amazing Sylvia Puttick");
    return new Response(body);
  },
});

const PORT = process.env.PORT || 3000;

const app = new Elysia();

const secretAppTitle: string = "Bun is good init";

app
  .decorate("secretAppName", secretAppTitle)
  .get("/", async (handler) => {
    console.log(handler.request.url, "handler");
    return { message: "Hey Hey h" };
  })
  // group('/user', app =>
  //   app.get('/get', async (handler) => {return { message: "Hey Hey h" }
  // }),
  //   app.get('/create', async (handler) => {return { message: "Hey Hey h" }
  // }),
  //   app.get('/update', async (handler) => {return { message: "Hey Hey h" }
  // })
  //)
  .listen(PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
