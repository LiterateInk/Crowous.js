import type { Meal, Restaurant } from "~/models";

export function getMealsForDate(restaurant: Restaurant, date: Date): Array<Meal> | undefined {
  const currentSTR = date.toLocaleDateString();
  return restaurant.menus.find((menu) => menu.date.toLocaleDateString() === currentSTR)?.meals;
};
