import type { MealCategory, Moment } from "~/models";

export type Meal = Readonly<{
  categories: Array<MealCategory>;
  information: string | undefined;
  moment: Moment;
}>;
