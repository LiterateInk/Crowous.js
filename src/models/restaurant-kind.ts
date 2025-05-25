import { UnknownEnumValue } from "./errors/unknown-enum";

export enum RestaurantKind {
  ADMINISTRATIVE_RESTAURANT = "ADMINISTRATIVE_RESTAURANT",
  APPROVED_RESTAURANT = "APPROVED_RESTAURANT",
  BREWERY = "BREWERY",
  CAFETERIA = "CAFETERIA",
  COFFEE_CORNER = "COFFEE_CORNER",
  CROUS_AND_GO = "CROUS_AND_GO",
  FOOD_TRUCK = "FOOD_TRUCK",
  GROCERY_STORE = "GROCERY_STORE",
  KIOSK = "KIOSK",
  MANAGED_RESTAURANT = "MANAGED_RESTAURANT",
  PIZZERIA = "PIZZERIA",
  RESTAURANT = "RESTAURANT",
  SANDWICH_SHOP = "SANDWICH_SHOP",
  SCOOTER = "SCOOTER",
  SELF_SERVICE = "SELF_SERVICE",
  SPACE = "SPACE"
}

// eslint-disable-next-line ts/no-namespace
export namespace RestaurantKind {
  export function fromFormattedValue(value: string): RestaurantKind {
    switch (value) {
      case "Brasserie":
        return RestaurantKind.BREWERY;
      case "Cafétéria":
        return RestaurantKind.CAFETERIA;
      case "Coffee Corner":
        return RestaurantKind.COFFEE_CORNER;
      case "crous and go":
        return RestaurantKind.CROUS_AND_GO;
      case "épicerie":
        return RestaurantKind.GROCERY_STORE;
      case "Foodtruck":
        return RestaurantKind.FOOD_TRUCK;
      case "Kiosque":
        return RestaurantKind.KIOSK;
      case "Libre-service":
        return RestaurantKind.SELF_SERVICE;
      case "Pizzéria":
        return RestaurantKind.PIZZERIA;
      case "Restaurant":
        return RestaurantKind.RESTAURANT;
      case "Restaurant administratif":
        return RestaurantKind.ADMINISTRATIVE_RESTAURANT;
      case "Restaurant agréé":
        return RestaurantKind.APPROVED_RESTAURANT;
      case "Restaurant géré":
        return RestaurantKind.MANAGED_RESTAURANT;
      case "Sandwicherie":
        return RestaurantKind.SANDWICH_SHOP;
      case "Space":
        return RestaurantKind.SPACE;
      case "Triporteur":
        return RestaurantKind.SCOOTER;
      default:
        throw new UnknownEnumValue("RestaurantKind", value);
    }
  }
}
