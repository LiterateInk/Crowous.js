import { RestaurantKind, UnknownEnumValue } from "~/models";

export const decodeRestaurantKind = (value: any): RestaurantKind => {
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
    case "Triporteur":
      return RestaurantKind.SCOOTER;
    default:
      throw new UnknownEnumValue("RestaurantKind", value);
  }
};
