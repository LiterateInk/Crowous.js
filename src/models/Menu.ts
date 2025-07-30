import type { Meal } from "~/models";

export class Menu {
  constructor(
    public date: Date,
    public meals: Array<Meal>
  ) {}
}
