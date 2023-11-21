import { Elysia, t } from "elysia";
import figlet from "figlet";

// Company Information

export const experimentsController = new Elysia()
  .state("version", 10001)
  .get("/experiments", async () => {
    // Write to ASCI and show on the page
    const bodytext = "Dedicated to the Amazing Lydia Coen Mason";
    const body = figlet.textSync(bodytext); //(bodytext, "Alligator2");

    // Write to txt file
    await Bun.write("output.txt", body);

    // Read File
    const file = await Bun.file("output.txt");
    console.log(await file.text(), file.size);

    // Read as Stream and Buffer
    console.log(await file.stream());
    console.log(await file.arrayBuffer());

    return body;
  });
