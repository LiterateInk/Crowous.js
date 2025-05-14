import type { Feed } from "~/models";
import { HttpRequest, send } from "schwi";
import { BASE_URL } from "~/core/constans";
import { decodeFeed } from "~/decoders/feed";

export const feeds = async (): Promise<Array<Feed>> => {
  const request = new HttpRequest.Builder(BASE_URL + "feeds.json").build();
  const response = await send(request);
  const { results } = await response.toJSON<{
    results: Array<any>;
  }>();

  return results.map(decodeFeed);
};
