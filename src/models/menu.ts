import type * as definitions from "~/definitions";
import { Meal } from "~/models";

export class Menu {
  constructor(
    public date: Date,
    public meals: Array<Meal>
  ) {}

  static fromJSON(json: definitions.menu): Menu {
    return new Menu(
      new Date(json.date),
      json.meal.map(Meal.fromJSON)
    );
  }
}
