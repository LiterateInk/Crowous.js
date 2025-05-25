import type * as definitions from "~/definitions";

export class Image {
  constructor(
    public description: string,
    public href: null | string
  ) {}

  static fromJSON(json: definitions.image): Image {
    return new Image(
      json.alt,
      json.src || null
    );
  }
}
