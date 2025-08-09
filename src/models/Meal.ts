import type * as definitions from "~/definitions";
import { deserialize, deserializeWith, rename, t } from "desero";
import { FoodCategory, Moment } from "~/models";

/**
 * A meal of a menu.
 * @hideconstructor
 */
export class Meal {
  /**
   * Each categories of the meal.
   */
  @deserializeWith(Meal.handleFoodCategories)
  @rename("foodcategory")
  categories = t.array(t.reference(FoodCategory));

  /**
   * Sometimes, when something goes wrong or when something needs to be shared
   * (e.g.: they exceptionnaly close for this day) it is written here
   * and `categories` ends up being an empty list.
   */
  information: null | string = null;

  /**
   * For when this meal is made for during the day.
   */
  @rename("name")
  moment = t.enum(Moment);

  private static handleFoodCategories(array: Array<definitions.foodcategory>, self: Meal): Array<FoodCategory> {
    return array.map((category) => deserialize(FoodCategory, category))
      .filter((category) => {
        if (category.name === "informations" || category.name === "Fermeture") {
          if (self.information === null) {
            self.information = category.dishes[0];
          }

          return false;
        }

        return true;
      });
  }
}
