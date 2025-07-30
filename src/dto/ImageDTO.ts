import type * as definitions from "~/definitions";
import { Image } from "~/models";

export class ImageDTO {
  constructor(private json: definitions.image) {}

  toModel(): Image {
    return new Image(
      this.json.alt,
      this.json.src || null
    );
  }
}
