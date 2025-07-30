import type { Day } from "./Day";
import type { Contact, Image, Meal, Menu, PaymentMethod, RestaurantKind } from "~/models";
import type { Moment } from "~/models";

export class Restaurant {
  /** @internal */
  constructor(
    public access: null | string,
    public accessibility: boolean,
    /**
     * Full address of the restaurant.
     */
    public address: string,
    public album: Image | null,
    public area: string,
    public closing: string,
    /**
     * Contact of the restaurant owners.
     */
    public contact: Contact,
    public crousAndGoUrl: null | string,
    public description: string,
    public id: number,
    public kind: RestaurantKind,
    public latitude: null | number,
    public longitude: null | number,
    /**
     * Menus for each day of the current month and a bit more sometimes.
     * Not sure when they decide to unpublish old menus and publish new ones.
     *
     * Also, note that they might be subject to change the menu of a given date frequently.
     */
    public menus: Array<Menu>,
    /**
     * An opening day string is three boolean (0 or 1).
     * Each day of the week is separated by commas (`,`) and each day
     * contains three booleans (`0` or `1`).
     *
     * Those three booleans are {@link Moment|"Morning, Lunch, Evening" values} in this order
     * and values `0` means closed and `1` means open.
     *
     * @example
     * // Let's take the following `opening` string.
     * "010,011,011,011,111,000,000"
     * // - Monday is closed on Morning and Evening, but is opened on Lunch.
     * // - Tuesday, Wednesday and Thursday are closed on Morning, but is opened on Lunch and Evening.
     * // - Friday is opened all day long (Morning, Lunch and Evening)
     * // - Saturday and Sunday are closed all day long (Morning, Lunch and Evening)
     */
    public opening: string,
    public operationalHours: null | string,
    public paymentMethods: Array<PaymentMethod>,
    public photo: Image,
    public shortDescription: string,
    public title: string,
    /**
     * Whether the restaurant has Wi-Fi or not.
     */
    public wifi: boolean
  ) {}

  /**
   * Get the meals of the restaurant for a given date.
   *
   * @returns A list of the meals for that date or `null` if nothing is found.
   */
  getMeals(date: Date): Array<Meal> | null {
    return this.menus.find((menu) =>
      menu.date.getDate() === date.getDate()
      && menu.date.getMonth() === date.getMonth()
    )?.meals ?? null;
  }

  /**
   * Checks whether the restaurant is opened at a certain date on a certain moment.
   *
   * @example
   * const today = new Date();
   * const open = restaurant.isOpen(today, Moment.Lunch);
   */
  isOpen(date: Date, moment: Moment): boolean;
  /**
   * Checks whether the restaurant is opened at a certain day index on a certain moment.
   *
   * @example
   * const open = restaurant.isOpen(Day.Monday, Moment.Lunch);
   */
  isOpen(day: Day, moment: Moment): boolean;
  isOpen(dateOrDay: Date | Day, moment: Moment): boolean {
    let day: number;

    if (dateOrDay instanceof Date) {
      day = dateOrDay.getDay();
    }
    else {
      // is instanceof Day enum.
      day = dateOrDay;
    }

    return (this.opening.split(",")[day][moment] as "0" | "1") === "1";
  }
}
