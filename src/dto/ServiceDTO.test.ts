import services from "@!/services.json";
import { describe, expect, it } from "bun:test";
import { ServiceDTO } from "./ServiceDTO";

describe("ServiceDTO", () => {
  it("should decode [0] to model properly", () => {
    const service = new ServiceDTO(services[0]).toModel();
    expect(service.id).toBe("12");
    expect(service.title).toBe("Payer avec Izly");
    expect(service.description).toBe("Accéder à mon compte");
    expect(service.url).toBe("http://www.izly.fr/");
    expect(service.imageUrl).toBe("https://admin-v2.crous-mobile.fr//media/onlineservice/20151022_logo_izly_big.png");
  });

  it("should decode [1] to model properly", () => {
    const service = new ServiceDTO(services[1]).toModel();
    expect(service.id).toBe("79");
    expect(service.title).toBe("Suivez-nous sur Facebook !");
    expect(service.description).toBeNull();
    expect(service.url).toBe("http://www.facebook.com/crous.debordeauxaquitaine");
    expect(service.imageUrl).toBe("https://admin-v2.crous-mobile.fr//media/onlineservice/20171219_FB-f-Logo__blue_50.png");
  });
});
