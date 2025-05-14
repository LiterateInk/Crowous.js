import type { Home } from "~/models";
import { HttpRequest, send } from "schwi";
import { BASE_URL } from "~/core/constans";
import { parseXML } from "~/core/xml";
import { decodeHome } from "~/decoders/home";

export const housing = async (identifier: string): Promise<Array<Home>> => {
  const request = new HttpRequest.Builder(BASE_URL + `${identifier}/${identifier}-logement.xml`).build();
  const response = await send(request);

  const content = parseXML(await response.toString());
  return content.root.residence.map(decodeHome);
};
