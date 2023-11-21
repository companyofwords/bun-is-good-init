import { describe, expect, test, beforeAll } from "bun:test";
import { cp } from "fs";

beforeAll(() => {
  // Setup test
});

describe("math", () => {
  test("addition", () => {
    expect(2 + 2).toBe(4);
  });
});
