/**
 * An image with a description.
 */
export class Image {
  /** @internal */
  constructor(
    /**
     * Description of the linked image, probably for an `alt` attribute.
     */
    public description: string,
    public href: null | string
  ) {}
}
