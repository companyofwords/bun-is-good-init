import { Elysia } from "elysia";

// Controllers
import { infoController } from "./controllers/info";
import { basicsController } from "./controllers/basics";
import { experimentsController } from "./controllers/experiments";

const PORT = process.env.PORT || 3000;

const scrApp = new Elysia();
// Initial Information and HTML Redirect
scrApp.use(basicsController);
// Experiments - ways to use Bun like NodeJS
scrApp.use(experimentsController);
// Basic Company Information
scrApp.use(infoController);
// Website information

// Staff

// Affiliate

// Actual Administrative Access

scrApp.listen(PORT);

console.log(
  `🦊 Elysia is now running at ${scrApp.server?.hostname}:${scrApp.server?.port}`
);
