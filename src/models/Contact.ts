import { deserializeWith, rename, t, u } from "desero";

/**
 * Contact information.
 * @hideconstructor
 */
export class Contact {
  @deserializeWith(u.falsyToNull)
  email = t.option(t.string());

  /**
   * Note that there is no specific format for this field,
   * so be prepared to receive any phone number format.
   */
  @rename("tel")
  phone = t.string();
}
