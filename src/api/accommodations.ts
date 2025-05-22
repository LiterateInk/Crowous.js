import type * as definitions from "~/definitions";
import { HttpRequest, send } from "schwi";
import { BASE_URL } from "~/core/constants";
import { Residence } from "~/models";

export const getAccommodations = async (identifier: string): Promise<Array<Residence>> => {
  const request = new HttpRequest.Builder(BASE_URL + `${identifier}/${identifier}-logement.xml`).build();
  const response = await send(request);

  const content = await response.toXML<{
    residence: Array<definitions.residence>;
  }>();

  return content.root.residence.map(Residence.fromJSON);
};
