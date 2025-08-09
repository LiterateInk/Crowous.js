import { deserializeWith, rename, t, u } from "desero";

/**
 * An image with a description.
 * @hideconstructor
 */
export class Image {
  /**
   * Description of the linked image, probably for an `alt` attribute.
   */
  @rename("alt")
  description = t.string();

  @deserializeWith(u.falsyToNull)
  @rename("src")
  href = t.option(t.string());
}
