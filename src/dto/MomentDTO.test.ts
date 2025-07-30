import { describe, expect, it } from "bun:test";
import { UnknownEnumValueError } from "~/errors";
import { Moment } from "~/models";
import { MomentDTO } from "./MomentDTO";

describe("MomentDTO", () => {
  it("should decode properly morning", () => {
    const dto = new MomentDTO("matin");
    expect(dto.toDomain()).toBe(Moment.Morning);
  });

  it("should decode properly lunch", () => {
    const dto = new MomentDTO("midi");
    expect(dto.toDomain()).toBe(Moment.Lunch);
  });

  it("should decode properly evening", () => {
    const dto = new MomentDTO("soir");
    expect(dto.toDomain()).toBe(Moment.Evening);
  });

  it("should throw if not valid value", () => {
    const dto = new MomentDTO("not valid value");
    expect(() => dto.toDomain()).toThrowError(UnknownEnumValueError);
  });
});
