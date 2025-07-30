import type { Contact, Image, Meal, Menu, PaymentMethod, RestaurantKind } from "~/models";
import { Moment } from "~/models";

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

  getMeals(date: Date): Array<Meal> | undefined {
    const today = date.toLocaleDateString();
    return this.menus.find((menu) => menu.date.toLocaleDateString() === today)?.meals;
  }

  isOpen(dayIndex: number, moment: Moment): boolean {
    const day = this.opening.split(",")[dayIndex];
    const state = day[Moment.toOpeningDayIndex(moment)] as "0" | "1";

    return state === "1";
  }
}
