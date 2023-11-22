import { Elysia, t } from "elysia";

// Company Information

export const infoController = new Elysia({
  prefix: "/info",
})
  .state("information-version", 10001)
  .get("/", () => {
    return "Info";
  });
