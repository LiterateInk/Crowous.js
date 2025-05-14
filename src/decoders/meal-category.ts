import type { MealCategory } from "~/models";

export const decodeMealCategory = (category: any): MealCategory => {
  return {
    dishes: category.dishes.map((dish: any) => dish.name),
    name: category.name
  };
};
