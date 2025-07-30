import type * as definitions from "~/definitions";
import { MealDTO } from "~/dto";
import { Menu } from "~/models";

export class MenuDTO {
  constructor(private json: definitions.menu) {}

  toModel(): Menu {
    return new Menu(
      new Date(this.json.date),
      this.json.meal.map((meal) => new MealDTO(meal).toModel())
    );
  }
}
