import type * as definitions from "~/definitions";
import type { Service } from "~/models";
import { HttpRequest, send } from "schwi";
import { BASE_URL } from "~/core/constants";
import { ServiceDTO } from "~/dto";

export async function getServicesFrom(identifier: string): Promise<Array<Service>> {
  const request = new HttpRequest.Builder(BASE_URL + `${identifier}/${identifier}-online.xml`).build();
  const response = await send(request);

  const xml = await response.toXML<{
    online: Array<definitions.service>;
  }>();

  return xml.root.online.map((service) => new ServiceDTO(service).toModel());
};
