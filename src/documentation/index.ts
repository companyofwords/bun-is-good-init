import { Elysia, t } from "elysia";
import { swagger } from "@elysiajs/swagger";

export const documentation = new Elysia().use(
  swagger({
    path: "/docs", // endpoint which swagger will appear on
    documentation: {
      info: {
        title: "Bun.js CRUD app with Elysia.js",
        version: "1.0.0",
      },
    },
  })
);
