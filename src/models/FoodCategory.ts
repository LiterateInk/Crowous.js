/**
 * A category of a meal.
 */
export class FoodCategory {
  /** @internal */
  constructor(
    /**
     * All dishes available in this category.
     */
    public dishes: Array<string>,

    /**
     * Name of the category.
     */
    public name: string
  ) {}
}
