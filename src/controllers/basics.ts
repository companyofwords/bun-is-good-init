import { Elysia, t } from "elysia";
import figlet from "figlet";

// Company Information

export const basicsController = new Elysia()
  .state("version", 10001)
  .get("/", () => {
    const body = figlet.textSync("Dedicated to the Amazing Lydia Coen Mason");
    return body;
  });
