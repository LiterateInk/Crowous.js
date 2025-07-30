import type { Article, Residence, Restaurant, Service } from "~/models";
import { getAccommodationsFrom, getNewsFrom, getRestaurantsFrom, getServicesFrom } from "~/api";

/**
 * A feed is a CROUS instance in France.
 */
export class Feed {
  constructor(
    /**
     * Internal identifier of the CROUS instance,
     * will be used for further requests.
     */
    public identifier: string,

    /**
     * Not sure what is this for, it is always on `false`.
     */
    public isDefault: boolean,

    /**
     * Name of the CROUS instance.
     */
    public name: string
  ) {}

  /**
   * Get accommodations for the current feed.
   */
  getAccommodations(): Promise<Array<Residence>> {
    return getAccommodationsFrom(this.identifier);
  }

  /**
   * Get news for the current feed.
   */
  getNews(): Promise<Array<Article>> {
    return getNewsFrom(this.identifier);
  }

  /**
   * Get restaurants for the current feed.
   */
  getRestaurants(): Promise<Array<Restaurant>> {
    return getRestaurantsFrom(this.identifier);
  }

  /**
   * Get services for the current feed.
   */
  getServices(): Promise<Array<Service>> {
    return getServicesFrom(this.identifier);
  }
};
