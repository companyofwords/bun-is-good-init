import { Elysia, t } from "elysia";

// Company Information

export const infoController = new Elysia({
  prefix: "/info",
})
  .state("information-version", 10001)
  .get(
    "/",
    () => {
      return "Info";
    },
    // Adding details and tags so the API shows up in the swagger openAPI gui
    {
      detail: {
        summary: "Info",
        tags: ["Company Information"],
      },
    }
  );
