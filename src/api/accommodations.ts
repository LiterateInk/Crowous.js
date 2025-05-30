import type * as definitions from "~/definitions";
import { HttpRequest, send } from "schwi";
import { BASE_URL } from "~/core/constants";
import { Residence } from "~/models";

export async function getAccommodationsFrom(identifier: string): Promise<Array<Residence>> {
  const request = new HttpRequest.Builder(BASE_URL + `${identifier}/${identifier}-logement.xml`).build();
  const response = await send(request);

  const xml = await response.toXML<{
    residence: Array<definitions.residence>;
  }>();

  return xml.root.residence.map(Residence.fromXML);
};
