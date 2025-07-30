import type * as definitions from "~/definitions";
import type { Service } from "~/models";
import { HttpRequest, send } from "schwi";
import { BASE_URL } from "~/core/constants";
import { ServiceDTO } from "~/dto";

/**
 * Get all {@link Service|services} for a given identifier.
 *
 * @param identifier - Where we should look for services.
 * @returns A list of all {@link Service|services} for a given identifier.
 *
 * @example
 * const services = await getServicesFrom("bordeaux");
 *
 * for (const service of services) {
 *   console.log(service.title, service.url);
 * }
 *
 * @example
 * const feeds = await getFeeds();
 * const services = await getServicesFrom(feeds[0].identifier);
 * // ...
 */
export async function getServicesFrom(identifier: string): Promise<Array<Service>> {
  const request = new HttpRequest.Builder(BASE_URL + `${identifier}/${identifier}-online.xml`).build();
  const response = await send(request);

  const xml = await response.toXML<{
    online: Array<definitions.service>;
  }>();

  return xml.root.online.map((service) => new ServiceDTO(service).toModel());
};
