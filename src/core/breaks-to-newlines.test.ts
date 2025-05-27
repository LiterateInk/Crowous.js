import { describe, expect, it } from "bun:test";
import { breaksToNewlines } from "./breaks-to-newlines";

describe("breaksToNewlines", () => {
  it("should replace a single <br/> into \\n", () => {
    expect(breaksToNewlines("hello<br/>world")).toBe("hello\nworld");
  });

  it("should replace all <br/> into \\n", () => {
    expect(breaksToNewlines("<br/>hello<br/><br/>world<br/>")).toBe("\nhello\n\nworld\n");
  });
});
