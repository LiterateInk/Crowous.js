import type { Contact, Image, Menu, PaymentMethod, RestaurantKind } from "~/models";

export type Restaurant = Readonly<{
  access: string;
  accessibility: boolean;
  address: string;
  album: Image | undefined;
  area: string;
  closing: string;
  contact: Contact;
  crousAndGo: string;
  description: string;
  id: number;
  kind: RestaurantKind;
  latitude: number;
  longitude: number;
  menus: Array<Menu>;
  opening: string;
  operationalHours: string;
  paymentMethods: Array<PaymentMethod>;
  photo: Image;
  shortDescription: string;
  title: string;
  wifi: boolean;
}>;
