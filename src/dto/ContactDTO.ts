import type * as definitions from "~/definitions";
import { Contact } from "~/models";

export class ContactDTO {
  constructor(private json: definitions.contact) {}

  toModel(): Contact {
    return new Contact(
      this.json.email || null,
      this.json.tel
    );
  }
}
