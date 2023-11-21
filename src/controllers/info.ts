import { Elysia, t } from "elysia";

// Company Information

export const infoController = new Elysia()
  .state("information-version", 10001)
  .get("/info", () => {
    return "Info";
  });
