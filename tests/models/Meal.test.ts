import type * as definitions from "~/definitions";
import { describe, expect, it } from "bun:test";
import { deserialize } from "desero";
import { Meal, Moment } from "~/models";

const meals: Array<definitions.meal> = [
  {
    foodcategory: [
      {
        dishes: [
          {
            name: "Boissons chaudes"
          },
          {
            name: "Boissons fraiches"
          }
        ],
        name: "CAFETERIA"
      }
    ],
    name: "matin"
  },
  {
    foodcategory: [
      {
        dishes: [
          {
            name: "Boissons chaudes"
          },
          {
            name: "Boissons fraiches"
          }
        ],
        name: "CAFETERIA"
      }
    ],
    name: "midi"
  },
  {
    foodcategory: [
      {
        dishes: [
          {
            name: "En fonction de l'affluence, ce menu est susceptible de modification en cours de service."
          }
        ],
        name: "informations"
      }
    ],
    name: "soir"
  }
];

describe("MealDTO", () => {
  it("should decode [0] to model properly", () => {
    const meal = deserialize(Meal, meals[0]);
    expect(meal.moment).toBe(Moment.Morning);
    expect(meal.information).toBeNull();
    expect(meal.categories).toBeArrayOfSize(1);
  });

  it("should decode [1] to model properly", () => {
    const meal = deserialize(Meal, meals[1]);
    expect(meal.moment).toBe(Moment.Lunch);
    expect(meal.information).toBeNull();
    expect(meal.categories).toBeArrayOfSize(1);
  });

  it("should decode [2] to model properly", () => {
    const meal = deserialize(Meal, meals[2]);
    expect(meal.moment).toBe(Moment.Evening);
    expect(meal.information).toBe("En fonction de l'affluence, ce menu est susceptible de modification en cours de service.");
    expect(meal.categories).toBeEmpty();
  });
});
