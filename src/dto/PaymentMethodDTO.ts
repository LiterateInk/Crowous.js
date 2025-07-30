import { UnknownEnumValueError } from "~/errors";
import { PaymentMethod } from "~/models";

export class PaymentMethodDTO {
  constructor(private value: string) {}

  toModel(): PaymentMethod {
    switch (this.value) {
      case "Carte bancaire":
        return PaymentMethod.Card;
      case "Espèce":
        return PaymentMethod.Cash;
      case "IZLY":
        return PaymentMethod.Izly;
      case "Monéo":
        return PaymentMethod.Moneo;
      default:
        throw new UnknownEnumValueError("PaymentMethod", this.value);
    }
  }
}
