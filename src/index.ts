import { Elysia, t } from "elysia";
import { plugin } from "./plugin";
import figlet from "figlet";

const PORT = process.env.PORT || 3000;

const app = new Elysia();

const secretAppTitle: string = "Bun is good init";

// Application
app
  .decorate("secretAppName", secretAppTitle)
  .decorate("getDate", () => Date.now())
  .use(plugin)
  .state({ id: 1, email: "j@jmail.com" })
  .get("/", async (handler) => {
    console.log(handler.request.url, "handler");
    const body = figlet.textSync("Amazing Sylvia Puttick");
    return body;
  })
  .get("/post/:id", async ({ params: { id } }) => {
    return { id: id, title: "Learn or Burn" };
  })
  .post("/post", ({ body, set, store }) => {
    console.log(store);
    set.status = 201;
    return body;
  })
  .get("/track/*", () => {
    return "Track Route";
  })
  .get("/tracks", ({ store, getDate }) => {
    console.log(store, getDate());
    console.log(store["plugin-version"]);
    return new Response(
      JSON.stringify({
        tracks: ["Dancing Feet", "song 2 "],
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  });

app.group("/v1", (app) =>
  app
    .get("/", () => "Using v1")
    .group(
      "/user",
      (app) => app.post("/sign-in", () => "sign in....")
      //.post('/sign-up', signUp)
      //.post('/profile', getProfile)
    )
);

app.listen(PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
