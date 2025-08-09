import { deserializeWith, rename, t, u } from "desero";

/**
 * @hideconstructor
 */
export class Service {
  @deserializeWith(u.falsyToNull)
  @rename("short_desc")
  description = t.option(t.string());

  id = t.string();

  @rename("image")
  imageUrl = t.string();

  title = t.string();

  @rename("link")
  url = t.string();
}
