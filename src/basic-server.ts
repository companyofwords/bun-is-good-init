import figlet from "figlet";

const server = Bun.serve({
  port: 3888,
  fetch(req, server) {
    const url = new URL(req.url);

    if (url.pathname === "/") {
      const body = figlet.textSync("Amazing Sylvia Puttick");
      return new Response(body);
    }

    if (url.pathname === "/about") {
      return new Response("About Me");
    }

    if (url.pathname === "/contact") {
      throw new Error("Could not fetch");
    }

    if (url.pathname === "/greet") {
      return new Response(Bun.file("./greet.txt"));
    }

    return new Response("404");
  },
  error(error) {
    return new Response(`<pre> ${error} \n ${error.stack} </pre>`, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  },
});
