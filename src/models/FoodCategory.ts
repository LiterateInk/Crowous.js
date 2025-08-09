import { deserializeWith, t, u } from "desero";

/**
 * A category of a meal.
 * @hideconstructor
 */
export class FoodCategory {
  /**
   * All dishes available in this category.
   */
  @deserializeWith(u.pick("name"))
  dishes = t.array(t.string());

  /**
   * Name of the category.
   */
  name = t.string();
}
