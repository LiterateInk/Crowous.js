import { HttpRequest, send } from "schwi";
import { BASE_URL } from "~/core/constants";
import { decodeRestaurant } from "~/decoders/restaurant";
import { type Meal, Moment, type Restaurant } from "~/models";

export const restaurants = async (identifier: string): Promise<Array<Restaurant>> => {
  const request = new HttpRequest.Builder(BASE_URL + `${identifier}/externe/crous-${identifier}.min.json`).build();
  const response = await send(request);

  let content = await response.toString();
  content = content.replace(/[\u0000-\u001F]/g, "");

  const { restaurants } = JSON.parse(content);
  return restaurants.map(decodeRestaurant);
};

export const meals = (restaurant: Restaurant, date = new Date()): Array<Meal> | undefined => {
  const currentSTR = date.toLocaleDateString();
  return restaurant.menus.find((menu) => menu.date.toLocaleDateString() === currentSTR)?.meals;
};
