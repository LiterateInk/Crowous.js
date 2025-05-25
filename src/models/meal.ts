import type * as definitions from "~/definitions";
import { FoodCategory, Moment } from "~/models";

export class Meal {
  constructor(
    public categories: Array<FoodCategory>,
    public information: null | string,
    public moment: Moment
  ) {}

  static fromJSON(json: definitions.meal): Meal {
    let information: null | string = null;

    const categories = json.foodcategory.map(FoodCategory.fromJSON)
      .filter((category) => {
        if (category.name === "informations" || category.name === "Fermeture") {
          if (information === null) {
            information = category.dishes[0];
          }

          return false;
        }

        return true;
      });

    return new Meal(
      categories,
      information,
      Moment.fromFormattedValue(json.name)
    );
  }
}
