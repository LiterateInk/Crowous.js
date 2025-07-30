import residences from "@!/residences.json";
import { describe, expect, it } from "bun:test";
import { ResidenceDTO } from "./ResidenceDTO";

describe("ResidenceDTO", () => {
  it("should decode [0] to model properly", () => {
    // @ts-expect-error : json is not matching exactly definitions.
    const residence = new ResidenceDTO(residences[0]).toModel();
    expect(residence.address).toBe("Avenue de Collégno, 33400 Talence");
    expect(residence.albumUrl).toBeNull();
    expect(residence.appointmentUrl).toBeNull();
    expect(residence.area).toBe("Talence");
    expect(residence.bookingUrl).toBe("https://trouverunlogement.lescrous.fr/");
    expect(residence.contact).toBe("<p>Village 1 rénové<br /></strong>Campus Talence</p>");
    expect(residence.crousAndGoUrl).toBeNull();
    expect(residence.email).toBe("residences.campus-talence@crous-bordeaux.fr");
    expect(residence.fullInformation).toBe("<p>Tram B - Arrêt Arts et Métiers<br />Ligne 87 et Corol 34 Arrêt Village 1</p>");
    expect(residence.id).toBe("1");
    expect(residence.latitude).toBe(44.8069763184);
    expect(residence.localServices).toBe("<p>some services for you!</p>");
    expect(residence.longitude).toBe(-0.6032860279);
    expect(residence.phone).toBe("05 56 80 67 68");
    expect(residence.description).toBe("Le Village 1 est constituée de 6 bâtiments construits en 1965 et entièrement rénovés entre 2008 et 2014.");
    expect(residence.title).toBe("Village rénové");
    expect(residence.troubleshootingUrl).toBe("https://linktr.ee/crous_bordeaux_reparation");
    expect(residence.virtualVisitUrl).toBeNull();
    expect(residence.websiteUrl).toBe("https://selfcare.wifirst.net/sessions/new");
    expect(residence.images).toEqual([
      "https://admin-v2.crous-mobile.fr//media/house/20221130_7bb95e8_4.jpg",
      "https://admin-v2.crous-mobile.fr//media/house/20221130_d7b33c8_3.jpg",
      "https://admin-v2.crous-mobile.fr//media/house/20221130_a839e77_2.jpg",
      "https://admin-v2.crous-mobile.fr//media/house/20221130_22b92ca_1.jpg"
    ]);
    expect(residence.inHomeServices).toEqual([
      "Accessible PMR",
      "Parking PMR"
    ]);
  });

  it("should decode [1] to model properly", () => {
    // @ts-expect-error : json is not matching exactly definitions.
    const residence = new ResidenceDTO(residences[1]).toModel();
    expect(residence.address).toBeNull();
    expect(residence.albumUrl).toBeNull();
    expect(residence.appointmentUrl).toBeNull();
    expect(residence.area).toBe("Bordeaux");
    expect(residence.bookingUrl).toBeNull();
    expect(residence.contact).toBe("Résidence La Boétie, Campus Bordeaux");
    expect(residence.crousAndGoUrl).toBeNull();
    expect(residence.email).toBe("budos-secretariat@crous-bordeaux.fr");
    expect(residence.fullInformation).toBe("Very useful information from here.");
    expect(residence.id).toBe("2");
    expect(residence.latitude).toBe(44.835246);
    expect(residence.localServices).toBe("Some local services, very interesting.");
    expect(residence.longitude).toBe(-0.571782);
    expect(residence.phone).toBeNull();
    expect(residence.description).toBeNull();
    expect(residence.title).toBe("Résidence La Boétie");
    expect(residence.troubleshootingUrl).toBeNull();
    expect(residence.virtualVisitUrl).toBeNull();
    expect(residence.websiteUrl).toBeNull();
    expect(residence.images).toBeEmpty();
    expect(residence.inHomeServices).toBeEmpty();
  });
});
