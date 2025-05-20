import type * as definitions from "~/definitions";
import { HttpRequest, send } from "schwi";
import { BASE_URL } from "~/core/constants";
import { parseXML } from "~/core/xml";
import { Residence } from "~/models";

export const accommodations = async (identifier: string): Promise<Array<Residence>> => {
  const request = new HttpRequest.Builder(BASE_URL + `${identifier}/${identifier}-logement.xml`).build();
  const response = await send(request);

  const content = parseXML<{
    residence: Array<definitions.residence>;
  }>(await response.toString());

  return content.root.residence.map(Residence.fromJSON);
};
