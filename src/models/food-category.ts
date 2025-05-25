import type * as definitions from "~/definitions";

export class FoodCategory {
  constructor(
    public dishes: Array<string>,
    public name: string
  ) {}

  static fromJSON(json: definitions.foodcategory): FoodCategory {
    return new FoodCategory(
      json.dishes.map((dish: any) => dish.name),
      json.name
    );
  }
}
