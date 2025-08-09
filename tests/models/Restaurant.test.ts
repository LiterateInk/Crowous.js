import restaurants from "@!/restaurants.json";
import { describe, expect, it } from "bun:test";
import { deserialize } from "desero";
import { PaymentMethod, Restaurant, RestaurantKind } from "~/models";

describe("RestaurantDTO", () => {
  it("should decode [0] to domain properly", () => {
    const restaurant = deserialize(Restaurant, restaurants[0]);
    expect(restaurant.id).toBe(802);
    expect(restaurant.title).toBe("KIOSQUE ENSIL");
    expect(restaurant.latitude).toBe(45.86048408005619);
    expect(restaurant.longitude).toBe(1.295423074950527);
    expect(restaurant.area).toBe("Limoges (87)");
    expect(restaurant.address).toBe("Ester Technopole 16 rue Atlantis 87000 LIMOGES");
    expect(restaurant.opening).toBe("010,010,010,010,010,000,000");
    expect(restaurant.closing).toBe("0");
    expect(restaurant.kind).toBe(RestaurantKind.Cafeteria);
    expect(restaurant.accessibility).toBe(true);
    expect(restaurant.wifi).toBe(false);
    expect(restaurant.shortDescription).toBe("Situé à proximité du RU de l'ENSIL et de l'ENSCI.");
    expect(restaurant.description).toBe("Situé à proximité du RU de l'ENSIL et de l'ENSCI, le Kiosque offre une alternative à la restauration traditionnelle en proposant de la vente à emporter.");
    expect(restaurant.access).toBe("Bus 10");
    expect(restaurant.operationalHours).toBe("Du lundi au vendredi de 11h30 à 13h30.");
    expect(restaurant.contact).toEqual({
      email: "resto-u.menot@crous-limoges.fr",
      phone: "05 19 56 13 93"
    });
    expect(restaurant.crousAndGoUrl).toBeNull();
    expect(restaurant.paymentMethods).toEqual([
      PaymentMethod.Cash,
      PaymentMethod.Card,
      PaymentMethod.Izly
    ]);
    expect(restaurant.photo).toEqual({
      description: "KIOSQUE ENSIL",
      href: "https://www.crous-limoges.fr/wp-content/uploads/sites/21/2015/10/Kiosque-ENSIL.jpg"
    });
    expect(restaurant.menus).toBeArrayOfSize(3);
  });

  it("should decode [1] to domain properly", () => {
    const restaurant = deserialize(Restaurant, restaurants[1]);
    expect(restaurant.id).toBe(208);
    expect(restaurant.title).toBe("RU Thérèse Menot");
    expect(restaurant.latitude).toBe(45.8138692);
    expect(restaurant.longitude).toBe(1.2288619);
    expect(restaurant.area).toBe("Limoges (87)");
    expect(restaurant.address).toBe("24 allée de la cornue 87000 Limoges");
    expect(restaurant.opening).toBe("010,010,010,010,010,010,000");
    expect(restaurant.closing).toBe("0");
    expect(restaurant.kind).toBe(RestaurantKind.Restaurant);
    expect(restaurant.accessibility).toBe(true);
    expect(restaurant.wifi).toBe(true);
    expect(restaurant.shortDescription).toBe("Au sein du campus de la FLSH");
    expect(restaurant.description).toBe("Au sein du campus de la FLSH, à proximité du campus Marcland.");
    expect(restaurant.access).toBe("Bus lignes 5 - 10 - 12 - 14");
    expect(restaurant.operationalHours).toBe("du lundi au vendredi de 11h30 à 14h00<br/><br/>");
    expect(restaurant.contact).toEqual({
      email: "resto-u.menot@crous-limoges.fr",
      phone: "05 19 56 13 44"
    });
    expect(restaurant.crousAndGoUrl).toBeNull();
    expect(restaurant.paymentMethods).toEqual([
      PaymentMethod.Cash,
      PaymentMethod.Card,
      PaymentMethod.Izly
    ]);
    expect(restaurant.photo).toEqual({
      description: "RU Thérèse Menot",
      href: null
    });
    expect(restaurant.menus).toBeArrayOfSize(0);
  });
});
