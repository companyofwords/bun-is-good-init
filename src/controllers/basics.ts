import { Elysia, t } from "elysia";
import figlet from "figlet";

// Company Information

export const basicsController = new Elysia()
  .state("version", 10001)
  // Basics
  .get(
    "/",
    async () => {
      // Write to ASCI and show on the page
      const bodytext = "Dedicated to the Amazing Lydia Coen Mason";
      const body = figlet.textSync(bodytext); //(bodytext, "Alligator2");

      return body;
    },
    // Adding details and tags so the API shows up in the swagger openAPI gui
    {
      detail: {
        summary: "Basic return body",
        tags: ["Basic Examples"],
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
