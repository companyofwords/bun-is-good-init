import { describe, expect, it, test, beforeAll } from "bun:test";
import Elysia from "elysia";
import figlet from "figlet";

beforeAll(() => {
  // Setup test
});

describe("math", () => {
  test("addition", () => {
    expect(2 + 2).toBe(4);
  });
});

// Basic call returns a response

describe("Elysia", () => {
  it("Basic call returns a response", async () => {
    const bodytext = "Dedicated to the Amazing Lydia Coen Mason";
    const body = figlet.textSync(bodytext); //(bodytext, "Alligator2");

    const app = new Elysia().get("/", () => {
      return body;
    });

    const response = await app
      .handle(new Request("http://localhost/"))
      .then((res) => res.text());

    expect(response).toBe(body);
  });
});
