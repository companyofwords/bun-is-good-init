import { Elysia } from "elysia";

// Plugins
import { logger } from "@grotto/logysia";
import { cors } from "@elysiajs/cors";
import { helmet } from "elysia-helmet";
import swagger from "@elysiajs/swagger";

// Routes & Controllers
import { api } from "./controllers/*";

// Pages
import { pages } from "./pages/*";

const PORT = process.env.PORT || 3000;

const app = new Elysia()
  // Logger - logs all requests below
  .use(logger())

  // Security
  // CORS
  .use(cors(/* your options */))
  // Helmet
  // .use(
  //   helmet({
  //     /* your options */
  //   })
  // )
  // JSX Pages
  .use(pages)
  // Documentation - using Swagger OpenAPI automatically generates docs from API below
  .use(
    swagger({
      path: "/docs", // endpoint which swagger will appear on
      exclude: ["/docs", "/docs/json", "/"],
      documentation: {
        info: {
          title: "'Bun.js is good init' Experiments",
          description:
            "This is a test! Creating an API and CRUD app with Bun.js and Elysia.js - using tools and patterns from Node.js and Express.  You can find out more about Bun.js at [https://bun.sh/docs](https://bun.sh/docs) or Elysia.js on [https://elysiajs.com/quick-start.html](https://elysiajs.com/quick-start.html).  For authorisation features, you can use the api key `good-init`. For more information about creating the documentation go to [https://elysiajs.com/patterns/creating-documentation.html](https://elysiajs.com/patterns/creating-documentation.html).",
          version: "1.0.1",
          contact: {
            name: "Neil Puttick", // your name
            email: "neil@wordsco.uk", // your email
            url: "https://wordsco.uk", // your website
          },
        },
      },
    })
  )
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
  })
  .listen(PORT);

export type App = typeof app;

console.log(
  `🦊 Elysia is now running at ${app.server?.hostname}:${app.server?.port}`
);
