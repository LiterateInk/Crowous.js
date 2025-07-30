/**
 * Contact information.
 */
export class Contact {
  /** @internal */
  constructor(
    public email: null | string,

    /**
     * Note that there is no specific format for this field,
     * so be prepared to receive any phone number format.
     */
    public phone: string
  ) {}
}
