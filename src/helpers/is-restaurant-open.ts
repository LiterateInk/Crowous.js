import type { Restaurant } from "~/models";
import { Moment } from "~/models";

export const isRestaurantOpen = (restaurant: Restaurant, dayIndex: number, moment: Moment): boolean => {
  const day = restaurant.opening.split(",")[dayIndex];
  const state = day[Moment.toOpeningDayIndex(moment)] as "0" | "1";

  return state === "1";
};
