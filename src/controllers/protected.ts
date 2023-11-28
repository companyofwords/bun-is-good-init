import { Elysia, t } from "elysia";

// Company Information

export const protectedController = new Elysia({
  prefix: "/protected",
})
  // Use guard to protect routes
  .guard(
    {
      query: t.Object({
        token: t.String(),
        //name: t.String(),
      }),
    },
    (app) =>
      app
        .get("/token", ({ query }) => {
          if (query.token == "12345") {
            return "Welcome - your token is valid";
          }
          return "Not Authorized";
        })
        .post(
          "/checktoken",
          ({ body, query }) => {
            return {
              name: query,
            };
          },
          {
            body: t.Object({
              id: t.Number(),
              // username: t.String(),
              // profile: t.Object({
              //   name: t.String(),
              // }),
            }),
          }
        )
  )
  //   Grouped Guard
  .group(
    "/secure",
    {
      query: t.Object({
        token: t.String(),
        //name: t.String(),
      }),
    },
    (apps) =>
      //   app.get("/1", ({ body }) => {
      //     console.log(body, "body");
      //   })
      apps.get("/token", (handler) => {
        if (handler.query.token == "12345") {
          console.log(handler, ": body");
          return "Welcome - your token is valid";
        }
        return "Not Authorized";
      })
  );
