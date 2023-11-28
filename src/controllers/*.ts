import Elysia from "elysia";

// Controllers
import { basicsController } from "./basics";
import { experimentsController } from "./experiments";
import { infoController } from "./info";
import { dbController } from "./db_example";
import { cronController } from "./cron";
import { protectedController } from "./protected";

export const api = new Elysia({
  prefix: "/api",
})
  //Uncomment below to see cron controllers
  //.use(cronController)
  .use(basicsController)
  .use(protectedController)
  .use(infoController)
  .use(experimentsController)
  .use(dbController);
