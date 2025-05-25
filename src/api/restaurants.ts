import type * as definitions from "~/definitions";
import { HttpRequest, send } from "schwi";
import { BASE_URL } from "~/core/constants";
import { Restaurant } from "~/models";

export async function getRestaurantsFrom(identifier: string): Promise<Array<Restaurant>> {
  const request = new HttpRequest.Builder(BASE_URL + `${identifier}/externe/crous-${identifier}.min.json`).build();
  const response = await send(request);

  let content = await response.toString();
  content = content.replace(/[\u0000-\u001F]/g, "");

  const { restaurants } = JSON.parse(content) as {
    restaurants: Array<definitions.restaurant>;
  };

  return restaurants.map(Restaurant.fromJSON);
};
