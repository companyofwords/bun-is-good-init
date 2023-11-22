import Elysia from "elysia";

// Controllers
import { basicsController } from "./basics";
import { experimentsController } from "./experiments";
import { infoController } from "./info";
import { dbController } from "./db_example";

export const api = new Elysia({
  prefix: "/api",
})

  .use(basicsController)
  .use(experimentsController)
  .use(infoController)
  .use(dbController);
