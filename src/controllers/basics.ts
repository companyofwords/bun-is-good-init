import { Elysia, t } from "elysia";
import figlet from "figlet";

// Company Information

export const basicsController = new Elysia()
  .state("version", 10001)
  .get("/", async () => {
    // Write to ASCI and show on the page
    const bodytext = "Dedicated to the Amazing Lydia Coen Mason";
    const body = figlet.textSync(bodytext); //(bodytext, "Alligator2");

    return body;
  });
