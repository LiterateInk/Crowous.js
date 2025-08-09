import { deserializeWith, rename, t } from "desero";
import { Meal } from "~/models";

/**
 * Menu of a specific date with meals details.
 * @hideconstructor
 */
export class Menu {
  /**
   * For when this menu is made for.
   */
  @deserializeWith((date) => new Date(date))
  date = t.instance<Date>();

  /**
   * Meals available in this menu.
   */
  @rename("meal")
  meals = t.array(t.reference(Meal));
}
