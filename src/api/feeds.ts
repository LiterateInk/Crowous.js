import type * as definitions from "~/definitions";
import { HttpRequest, send } from "schwi";
import { BASE_URL } from "~/core/constants";
import { Feed } from "~/models";

export async function getFeeds(): Promise<Array<Feed>> {
  const request = new HttpRequest.Builder(BASE_URL + "feeds.json").build();
  const response = await send(request);

  const json = await response.toJSON<{
    results: Array<definitions.feed>;
  }>();

  return json.results.map(Feed.fromJSON);
};
