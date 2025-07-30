import type * as definitions from "~/definitions";
import { Service } from "~/models";

export class ServiceDTO {
  constructor(private xml: definitions.service) {}

  toModel(): Service {
    return new Service(
      this.xml.id,
      this.xml.image,
      this.xml.short_desc || null,
      this.xml.title,
      this.xml.link
    );
  }
}
