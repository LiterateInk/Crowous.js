import type * as definitions from "~/definitions";
import { deserialize } from "desero";
import { HttpRequest, send } from "schwi";
import { BASE_URL } from "~/core/constants";
import { Restaurant } from "~/models";

/**
 * Get all {@link Restaurant|restaurants} for a given identifier.
 *
 * @param identifier - Where we should look for restaurants.
 * @returns A list of all {@link Restaurant|restaurants} for a given identifier.
 *
 * @example
 * const restaurants = await getRestaurantsFrom("bordeaux");
 *
 * for (const restaurant of restaurants) {
 *   console.log(restaurant.title, restaurant.address);
 * }
 *
 * @example
 * const feeds = await getFeeds();
 * const restaurants = await getRestaurantsFrom(feeds[0].identifier);
 * // ...
 */
export async function getRestaurantsFrom(identifier: string): Promise<Array<Restaurant>> {
  const request = new HttpRequest.Builder(BASE_URL + `${identifier}/externe/crous-${identifier}.min.json`).build();
  const response = await send(request);

  let content = await response.toString();
  content = content.replace(/[\u0000-\u001F]/g, "");

  const { restaurants } = JSON.parse(content) as {
    restaurants: Array<definitions.restaurant>;
  };

  return restaurants.map((restaurant) => deserialize(Restaurant, restaurant));
};
