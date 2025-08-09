import type * as definitions from "~/definitions";
import { deserialize } from "desero";
import { HttpRequest, send } from "schwi";
import { BASE_URL } from "~/core/constants";
import { Feed } from "~/models";

/**
 * Get all available {@link Feed|feeds}, so every CROUS instance in France.
 * @returns A list of all available {@link Feed|feeds}.
 *
 * @example
 * const feeds = await getFeeds();
 */
export async function getFeeds(): Promise<Array<Feed>> {
  const request = new HttpRequest.Builder(BASE_URL + "feeds.json").build();
  const response = await send(request);

  const json = await response.toJSON<{
    results: Array<definitions.feed>;
  }>();

  return json.results.map((feed) => deserialize(Feed, feed));
};
