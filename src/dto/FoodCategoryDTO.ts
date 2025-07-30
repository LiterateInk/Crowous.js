import type * as definitions from "~/definitions";
import { FoodCategory } from "~/models";

export class FoodCategoryDTO {
  constructor(private json: definitions.foodcategory) {}

  toModel(): FoodCategory {
    return new FoodCategory(
      this.dishes(),
      this.json.name
    );
  }

  private dishes(): Array<string> {
    return this.json.dishes.map((dish) => dish.name);
  }
}
