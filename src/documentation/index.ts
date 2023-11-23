import { Elysia, t } from "elysia";
import { swagger } from "@elysiajs/swagger";

export const documentation = new Elysia().use(
  swagger({
    path: "/docs", // endpoint which swagger will appear on
    documentation: {
      info: {
        title: "Bun.js CRUD app with Elysia.js",
        description:
          "This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.",
        version: "1.0.1",
        contact: {
          name: "John doe", // your name
          email: "john@web.com", // your email
          url: "web.com", // your website
        },
      },
      tags: [{ name: "App", description: "General endpoints" }],
    },
    exclude: ["/docs", "/docs/json"],
  })
);
