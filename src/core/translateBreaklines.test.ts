import { describe, expect, it } from "bun:test";
import translateBreaklines from "./translateBreaklines";

describe("translateBreaklines", () => {
  it("should replace a single <br/> into \\n", () => {
    expect(translateBreaklines("hello<br/>world")).toBe("hello\nworld");
  });

  it("should replace all <br/> into \\n", () => {
    expect(translateBreaklines("<br/>hello<br/><br/>world<br/>")).toBe("\nhello\n\nworld\n");
  });
});
