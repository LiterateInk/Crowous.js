import type { FoodCategory, Moment } from "~/models";

export class Meal {
  constructor(
    public categories: Array<FoodCategory>,
    public information: null | string,
    public moment: Moment
  ) {}
}
