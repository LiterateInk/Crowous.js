import type * as definitions from "~/definitions";
import { deserialize } from "desero";
import { HttpRequest, send } from "schwi";
import { BASE_URL } from "~/core/constants";
import { Article } from "~/models";

/**
 * Get all {@link Article|articles} for a given identifier.
 *
 * @param identifier - Where we should look for articles.
 * @returns A list of all {@link Article|articles} for a given identifier.
 *
 * @example
 * const news = await getNewsFrom("bordeaux");
 *
 * for (const article of news) {
 *   console.log(article.category, article.title);
 * }
 *
 * @example
 * const feeds = await getFeeds();
 * const news = await getNewsFrom(feeds[0].identifier);
 * // ...
 */
export async function getNewsFrom(identifier: string): Promise<Array<Article>> {
  const request = new HttpRequest.Builder(BASE_URL + `${identifier}/externe/actu.xml`).build();
  const response = await send(request);

  const xml = await response.toXML<{
    article: Array<definitions.article>;
  }>();

  return xml.root.article.map((article) => deserialize(Article, article));
};
