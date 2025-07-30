import { UnknownEnumValueError } from "~/errors";
import { RestaurantKind } from "~/models";

export class RestaurantKindDTO {
  constructor(private value: string) {}

  toModel(): RestaurantKind {
    switch (this.value) {
      case "Brasserie":
        return RestaurantKind.Brewery;
      case "Cafétéria":
        return RestaurantKind.Cafeteria;
      case "Coffee Corner":
        return RestaurantKind.CoffeeCorner;
      case "crous and go":
        return RestaurantKind.CrousAndGo;
      case "épicerie":
        return RestaurantKind.GroceryStore;
      case "Foodtruck":
        return RestaurantKind.FoodTruck;
      case "Kiosque":
        return RestaurantKind.Kiosk;
      case "Libre-service":
        return RestaurantKind.SelfService;
      case "Pizzéria":
        return RestaurantKind.Pizzeria;
      case "Restaurant":
        return RestaurantKind.Restaurant;
      case "Restaurant administratif":
        return RestaurantKind.AdministrativeRestaurant;
      case "Restaurant agréé":
        return RestaurantKind.ApprovedRestaurant;
      case "Restaurant géré":
        return RestaurantKind.ManagedRestaurant;
      case "Sandwicherie":
        return RestaurantKind.SandwichShop;
      case "Space":
        return RestaurantKind.Space;
      case "Triporteur":
        return RestaurantKind.Scooter;
      default:
        throw new UnknownEnumValueError("RestaurantKind", this.value);
    }
  }
}
