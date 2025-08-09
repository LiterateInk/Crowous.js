import type { Article, Residence, Restaurant, Service } from "~/models";
import { deserializeWith, rename, t } from "desero";
import { getNewsFrom, getResidencesFrom, getRestaurantsFrom, getServicesFrom } from "~/api";

/**
 * A feed is a CROUS instance in France.
 * @hideconstructor
 */
export class Feed {
  /**
   * Internal identifier of the CROUS instance,
   * will be used for further requests.
   */
  @deserializeWith((url: string) => url.split("/")[4])
  @rename("url")
  identifier = t.string();

  /**
   * Not sure what is this for, it is always on `false`.
   */
  @rename("is_default")
  isDefault = t.boolean();

  /**
   * Name of the CROUS instance.
   */
  @deserializeWith((name: string) => name.replace("FLUX ", ""))
  name = t.string();

  /**
   * Get news for the current feed.
   */
  getNews(): Promise<Array<Article>> {
    return getNewsFrom(this.identifier);
  }

  /**
   * Get residences for the current feed.
   */
  getResidences(): Promise<Array<Residence>> {
    return getResidencesFrom(this.identifier);
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
