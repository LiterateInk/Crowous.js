import { UnknownEnumValue } from "./errors/unknown-enum";

export enum PaymentMethod {
  CARD = "CARD",
  CASH = "CASH",
  IZLY = "IZLY",
  MONEO = "MONEO"
}

// eslint-disable-next-line ts/no-namespace
export namespace PaymentMethod {
  export function fromFormattedValue(value: string): PaymentMethod {
    switch (value) {
      case "Carte bancaire":
        return PaymentMethod.CARD;
      case "Espèce":
        return PaymentMethod.CASH;
      case "IZLY":
        return PaymentMethod.IZLY;
      case "Monéo":
        return PaymentMethod.MONEO;
      default:
        throw new UnknownEnumValue("PaymentMethod", value);
    }
  }
}
