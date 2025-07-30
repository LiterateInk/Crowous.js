import type * as definitions from "~/definitions";
import type { Residence } from "~/models";
import { HttpRequest, send } from "schwi";
import { BASE_URL } from "~/core/constants";
import { ResidenceDTO } from "~/dto";

/**
 *
 * @param identifier - Where we should look for accommodations.
 * @returns Accommodations for a given identifier.
 *
 * @example
 * const accommodations = await getAccommodationsFrom("bordeaux");
 *
 * for (const home of accommodations) {
 *   console.log(`[${home.area}]: ${home.title}`);
 * }
 *
 * @example
 * const feeds = await getFeeds();
 * const accommodations = await getAccommodationsFrom(feeds[0].identifier);
 * // ...
 */
export async function getAccommodationsFrom(identifier: string): Promise<Array<Residence>> {
  const request = new HttpRequest.Builder(BASE_URL + `${identifier}/${identifier}-logement.xml`).build();
  const response = await send(request);

  const xml = await response.toXML<{
    residence: Array<definitions.residence>;
  }>();

  return xml.root.residence.map((residence) => new ResidenceDTO(residence).toModel());
};
