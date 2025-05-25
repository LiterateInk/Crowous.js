import type * as definitions from "~/definitions";
import { breaksToNewlines } from "~/core/breaks-to-newlines";
import { Contact, Image, Menu, PaymentMethod, RestaurantKind } from "~/models";

export class Restaurant {
  constructor(
    public access: null | string,
    public accessibility: boolean,
    public address: string,
    public album: Image | null,
    public area: string,
    public closing: string,
    public contact: Contact,
    public crousAndGoUrl: null | string,
    public description: string,
    public id: number,
    public kind: RestaurantKind,
    public latitude: null | number,
    public longitude: null | number,
    public menus: Array<Menu>,
    public opening: string,
    public operationalHours: null | string,
    public paymentMethods: Array<PaymentMethod>,
    public photo: Image,
    public shortDescription: string,
    public title: string,
    public wifi: boolean
  ) {}

  static fromJSON(json: definitions.restaurant): Restaurant {
    const description = breaksToNewlines(json.description).trim();
    const shortDescription = json.shortdesc.trim();
    let operationalHours: null | string = null;

    if (json.operationalhours) {
      operationalHours = breaksToNewlines(json.operationalhours).trim();
    }

    return new Restaurant(
      json.access || null,
      json.accessibility,
      json.adresse,
      json.album ? Image.fromJSON(json.album) : null,
      json.area,
      json.closing,
      Contact.fromJSON(json.contact),
      json.crousandgo || null,
      description,
      json.id,
      RestaurantKind.fromFormattedValue(json.type),
      json.lat === 0 ? null : json.lat,
      json.lon === 0 ? null : json.lon,
      json.menus.map(Menu.fromJSON),
      json.opening,
      operationalHours,
      json.payment.map((method) => PaymentMethod.fromFormattedValue(method.name)),
      Image.fromJSON(json.photo),
      shortDescription,
      json.title,
      json.wifi
    );
  }
}
