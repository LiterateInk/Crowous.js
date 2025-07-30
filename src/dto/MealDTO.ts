import type * as definitions from "~/definitions";
import { FoodCategoryDTO, MomentDTO } from "~/dto";
import { Meal } from "~/models";

export class MealDTO {
  constructor(private json: definitions.meal) {}

  toModel(): Meal {
    let information: null | string = null;

    const categories = this.json.foodcategory.map((category) => new FoodCategoryDTO(category).toModel())
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
      new MomentDTO(this.json.name).toDomain()
    );
  }
}
