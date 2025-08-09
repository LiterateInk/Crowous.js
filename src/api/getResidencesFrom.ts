import type * as definitions from "~/definitions";
import { deserialize } from "desero";
import { HttpRequest, send } from "schwi";
import { BASE_URL } from "~/core/constants";
import { Residence } from "~/models";

/**
 * Get all {@link Residence|residences} for a given identifier.
 *
 * @param identifier - Where we should look for residences.
 * @returns A list of all {@link Residence|residences} for a given identifier.
 *
 * @example
 * const residences = await getResidencesFrom("bordeaux");
 *
 * for (const home of residences) {
 *   console.log(`[${home.area}]: ${home.title}`);
 * }
 *
 * @example
 * const feeds = await getFeeds();
 * const residences = await getResidencesFrom(feeds[0].identifier);
 * // ...
 */
export async function getResidencesFrom(identifier: string): Promise<Array<Residence>> {
  const request = new HttpRequest.Builder(BASE_URL + `${identifier}/${identifier}-logement.xml`).build();
  const response = await send(request);

  const xml = await response.toXML<{
    residence: Array<definitions.residence>;
  }>();

  return xml.root.residence.map((residence) => deserialize(Residence, residence));
};
