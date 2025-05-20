import type * as definitions from "~/definitions";

export class Residence {
  constructor(
    public address: null | string,
    public albumUrl: null | string,
    public appointmentUrl: null | string,
    public area: string,
    public bookingUrl: null | string,
    public contact: string,
    public crousAndGoUrl: null | string,
    public email: string,
    public fullInformation: string,
    public id: string,
    public images: string[],
    public inHomeServices: string[],
    public latitude: number,
    public localServices: string,
    public longitude: number,
    public phone: null | string,
    public shortDescription: null | string,
    public title: string,
    public troubleshootingUrl: null | string,
    public virtualVisitUrl: null | string,
    public websiteUrl: null | string
  ) {}

  static fromJSON(json: definitions.residence): Residence {
    return new Residence(
      json.address || null,
      json.albumUrl || null,
      json.appointmentUrl || null,
      json.zone,
      json.bookingUrl || null,
      json.contact,
      json.crousAndGoUrl || null,
      json.mail,
      json.infos,
      json.id,
      typeof json.images === "object" ? json.images.url : [],
      typeof json.house_services === "object" ? json.house_services.house_service : [],
      parseFloat(json.lat),
      json.services,
      parseFloat(json.lon),
      json.phone || null,
      json.short_desc || null,
      json.title,
      json.troubleshootingUrl || null,
      json.virtualVisitUrl || null,
      json.internetUrl || null
    );
  }
}
