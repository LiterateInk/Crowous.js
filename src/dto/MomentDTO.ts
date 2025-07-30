import { UnknownEnumValueError } from "~/errors";
import { Moment } from "~/models";

export class MomentDTO {
  constructor(private value: string) {}

  toDomain(): Moment {
    switch (this.value) {
      case "matin":
        return Moment.Morning;
      case "midi":
        return Moment.Lunch;
      case "soir":
        return Moment.Evening;
      default:
        throw new UnknownEnumValueError("Moment", this.value);
    }
  }
}
