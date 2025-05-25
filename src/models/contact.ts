import type * as definitions from "~/definitions";

export class Contact {
  constructor(
    public email: null | string,
    public phone: string
  ) {}

  static fromJSON(json: definitions.contact): Contact {
    return new Contact(
      json.email || null,
      json.tel
    );
  }
}
