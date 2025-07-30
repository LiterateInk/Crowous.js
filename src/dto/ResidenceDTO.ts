import type * as definitions from "~/definitions";
import { Residence } from "~/models";

export class ResidenceDTO {
  constructor(private json: definitions.residence) {}

  toModel(): Residence {
    return new Residence(
      this.json.address || null,
      this.json.albumUrl || null,
      this.json.appointmentUrl || null,
      this.json.zone,
      this.json.bookingUrl || null,
      this.json.contact,
      this.json.crousAndGoUrl || null,
      this.json.mail,
      this.json.infos,
      this.json.id,
      typeof this.json.images === "object" ? this.json.images.url : [],
      typeof this.json.house_services === "object" ? this.json.house_services.house_service : [],
      parseFloat(this.json.lat),
      this.json.services,
      parseFloat(this.json.lon),
      this.json.phone || null,
      this.json.short_desc || null,
      this.json.title,
      this.json.troubleshootingUrl || null,
      this.json.virtualVisitUrl || null,
      this.json.internetUrl || null
    );
  }
}
