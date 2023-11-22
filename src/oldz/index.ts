import { Elysia } from "elysia";
import { html } from "@elysiajs/html";

// Controllers
import { infoController } from "../controllers/info";
import { basicsController } from "../controllers/basics";
import { experimentsController } from "../controllers/experiments";
import { staffController } from "../controllers/db_example";

const PORT = process.env.PORT || 3000;

const scrApp = new Elysia().use(html());

// Initial Information and HTML Redirect
scrApp.use(basicsController);
// Experiments - ways to use Bun like NodeJS
scrApp.use(experimentsController);
// Basic Company Information
scrApp.use(infoController);
// Website information

// Staff
scrApp.use(staffController);

// Affiliate

// Actual Administrative Access

scrApp.listen(PORT);

console.log(
  `🦊 Elysia is now running at ${scrApp.server?.hostname}:${scrApp.server?.port}`
);
