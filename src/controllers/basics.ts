import { Elysia, t } from "elysia";
import figlet from "figlet";

// Company Information

export const basicsController = new Elysia()

  .state("version", 10001)
  // Hooks (Middleware) - on Request
  .onRequest(async ({ request }) => {
    console.log(request.headers.get("myheader"), "request");
  })
  // Basics
  .get(
    "/",
    async () => {
      // Write to ASCI and show on the page
      const bodytext = "Dedicated to the Amazing Lydia Coen Mason";
      const body = figlet.textSync(bodytext); //(bodytext, "Alligator2");

      return body;
    },
    {
      beforeHandle: ({ set, request: { headers } }) => {
        set.headers["Set-Cookie"] = "555";
        //console.log("Before Handle", headers);
      },
      detail: {
        summary: "Basic return body",
        tags: ["Basic Examples"],
      },
      afterHandle: ({ set, request: { headers } }) => {
        //headers.set("Set-Cookie") "4444";
        //console.log("Before Handle", headers);
      },
    }
  )
  // Ping
  .get(
    "/ping",
    () => {
      return "pong";
    }, // Adding details and tags so the API shows up in the swagger openAPI gui
    {
      detail: {
        summary: "Pinging the API",
        tags: ["Basic Examples"],
      },
    }
  )
  // Redirect
  .get(
    "/redirect",
    ({ set }) => {
      // Redirecting the front of house website
      set.redirect = "/";
    }, // Adding details and tags so the API shows up in the swagger openAPI gui
    {
      detail: {
        summary: "Redirecting API",
        tags: ["Basic Examples"],
      },
    }
  )
  // Set Headers
  .get(
    "/set-headers",
    ({ set }) => {
      set.status = 418;
      set.headers["x-powered-by"] = "Wordsco";

      return "I'm a teapot";
    }, // Adding details and tags so the API shows up in the swagger openAPI gui
    {
      detail: {
        summary: "Set Headers",
        tags: ["Basic Examples"],
      },
    }
  );
// Use Derive to customise context reactively
//.decorate("getDate", () => Date.now())
// .derive(({ request: { headers }, store, getDate }) => {
//   return {
//     authorization: headers.get("Authorization"),
//   };
// })
//.get("/head-check ", ({ authorization }) => authorization);
//
