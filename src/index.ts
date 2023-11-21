import { Elysia, t } from "elysia";
import { html } from "@elysiajs/html";

// Database
import { BooksDatabase } from "./db.js";

// Controllers
import { infoController } from "./controllers/info";
import { basicsController } from "./controllers/basics";
import { experimentsController } from "./controllers/experiments";

const PORT = process.env.PORT || 3000;

const scrApp = new Elysia()
  .use(html())
  .decorate("db", new BooksDatabase())
  .get("/books", ({ db }) => db.getBooks())
  .post(
    "/books",
    async ({ db, body }) => {
      console.log(body);
      const id = (await db.addBook(body)).id;
      console.log(id);
      return { success: true, id };
    },
    {
      body: t.Object({
        name: t.String(),
        author: t.String(),
      }),
    }
  )
  .put(
    "/books/:id",
    ({ db, params, body }) => {
      try {
        db.updateBook(parseInt(params.id), body);
        return { success: true };
      } catch (e) {
        return { success: false };
      }
    },
    {
      body: t.Object({
        name: t.String(),
        author: t.String(),
      }),
    }
  )
  .delete("/books/:id", ({ db, params }) => {
    try {
      db.deleteBook(parseInt(params.id));
      return { success: true };
    } catch (e) {
      return { success: false };
    }
  });
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
