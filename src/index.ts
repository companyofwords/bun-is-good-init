import { Elysia } from "elysia";

// Plugins
import { html } from "@elysiajs/html";
import { logger } from "@grotto/logysia";
import { cors } from "@elysiajs/cors";
import { helmet } from "elysia-helmet";
import swagger from "@elysiajs/swagger";

// Controllers
import { api } from "./controllers/*";

// Documentation
import { documentation } from "./documentation";

const PORT = process.env.PORT || 3000;

const app = new Elysia()
  // Logger
  //.use(logger())
  // CORS
  //.use(cors(/* your options */))
  // Helmet
  // .use(
  //   helmet({
  //     /* your options */
  //   })
  // )

  // Documentation
  .use(
    swagger({
      path: "/docs", // endpoint which swagger will appear on
      documentation: {
        info: {
          title: "Bun.js CRUD app with Elysia.js",
          version: "1.0.0",
        },
      },
    })
  )
  //.get("/", () => "hi")
  // Initial Information and HTML Redirect
  //.use(html())
  // Wildcard Centralised API routes/controllers
  .use(api)
  // .onStart(({ log }) => {
  //   if (config.env.NODE_ENV === "development") {
  //     void fetch("http://localhost:3001/restart");
  //     // log.debug("🦊 Triggering Live Reload");
  //     console.log("🦊 Triggering Live Reload");
  //   }
  // })
  .onError(({ code, error, request }) => {
    console.error(` ${request.method} ${request.url}`, code, error);
    //console.error(error);
  })
  .listen(PORT);

export type App = typeof app;

console.log(
  `🦊 Elysia is now running at ${app.server?.hostname}:${app.server?.port}`
);
