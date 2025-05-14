import type { Restaurant } from "~/models";
import { decodeContact } from "./contact";
import { decodeImage } from "./image";
import { decodeMenu } from "./menu";
import { decodePaymentMethod } from "./payment-method";
import { decodeRestaurantKind } from "./restaurant-kind";

export const decodeRestaurant = (restaurant: any): Restaurant => {
  return {
    access: restaurant.access,
    accessibility: restaurant.accessibility,
    address: restaurant.adresse,
    album: restaurant.album && decodeImage(restaurant.album),
    area: restaurant.area,
    closing: restaurant.closing,
    contact: decodeContact(restaurant.contact),
    crousAndGo: restaurant.crousandgo,
    description: restaurant.description,
    id: restaurant.id,
    kind: decodeRestaurantKind(restaurant.type),
    latitude: restaurant.lat,
    longitude: restaurant.lon,
    menus: restaurant.menus.map(decodeMenu),
    opening: restaurant.opening,
    operationalHours: restaurant.operationalhours,
    paymentMethods: restaurant.payment.map(decodePaymentMethod),
    photo: decodeImage(restaurant.photo),
    shortDescription: restaurant.shortdesc,
    title: restaurant.title,
    wifi: restaurant.wifi
  };
};
