import { Elysia, t } from "elysia";
import figlet from "figlet";

// Company Information

const bodytext = "Lydia Coen Mason";
const body = figlet.textSync(bodytext); //(bodytext, "Alligator2");

export const index = new Elysia().get("/", () => (
  <html lang="en">
    <head>
      <title>Hello Worlds</title>
    </head>
    <body>
      <h1>
        Bun is good int it?! Testing the features. Putting toe int water. WORDS
      </h1>
    </body>
  </html>
));
