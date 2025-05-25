import type * as definitions from "~/definitions";

export class Service {
  constructor(
    public id: string,
    public imageUrl: string,
    public description: null | string,
    public title: string,
    public url: string
  ) {}

  static fromXML(xml: definitions.service): Service {
    return new Service(
      xml.id,
      xml.image,
      xml.short_desc || null,
      xml.title,
      xml.link
    );
  }
}
