import type { Meal } from "~/models";

/**
 * Menu of a specific date with meals details.
 */
export class Menu {
  /** @internal */
  constructor(
    /**
     * For when this menu is made for.
     */
    public date: Date,

    /**
     * Meals available in this menu.
     */
    public meals: Array<Meal>
  ) {}
}
