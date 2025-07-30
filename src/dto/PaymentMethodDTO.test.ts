import { describe, expect, it } from "bun:test";
import { UnknownEnumValueError } from "~/errors";
import { PaymentMethod } from "~/models";
import { PaymentMethodDTO } from "./PaymentMethodDTO";

describe("PaymentMethodDTO", () => {
  it("should decode properly card", () => {
    const dto = new PaymentMethodDTO("Carte bancaire");
    expect(dto.toModel()).toBe(PaymentMethod.Card);
  });

  it("should decode properly cash", () => {
    const dto = new PaymentMethodDTO("Espèce");
    expect(dto.toModel()).toBe(PaymentMethod.Cash);
  });

  it("should decode properly izly", () => {
    const dto = new PaymentMethodDTO("IZLY");
    expect(dto.toModel()).toBe(PaymentMethod.Izly);
  });

  it("should decode properly moneo", () => {
    const dto = new PaymentMethodDTO("Monéo");
    expect(dto.toModel()).toBe(PaymentMethod.Moneo);
  });

  it("should throw if not valid value", () => {
    const dto = new PaymentMethodDTO("not valid value");
    expect(() => dto.toModel()).toThrowError(UnknownEnumValueError);
  });
});
