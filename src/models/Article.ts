import { deserializeWith, rename, t } from "desero";

/**
 * An article for a feed.
 * @hideconstructor
 */
export class Article {
  category = t.string();
  content = t.string();
  id = t.string();
  @rename("image")
  imageUrl = t.string();

  @deserializeWith((date) => new Date(date))
  @rename("date")
  publishedAt = t.instance<Date>();

  title = t.string();
}
