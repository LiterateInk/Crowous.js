import type { FoodCategory, Moment } from "~/models";

/**
 * A meal of a menu.
 */
export class Meal {
  /** @internal */
  constructor(
    /**
     * Each categories of the meal.
     */
    public categories: Array<FoodCategory>,

    /**
     * Sometimes, when something goes wrong or when something needs to be shared
     * (e.g.: they exceptionnaly close for this day) it is written here
     * and `categories` ends up being an empty list.
     */
    public information: null | string,

    /**
     * For when this meal is made for during the day.
     */
    public moment: Moment
  ) {}
}
