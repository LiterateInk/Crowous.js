import type { OnlineService } from "~/models";
import { HttpRequest, send } from "schwi";
import { BASE_URL } from "~/core/constants";
import { parseXML } from "~/core/xml";
import { decodeOnlineService } from "~/decoders/online-service";

export const onlineServices = async (identifier: string): Promise<Array<OnlineService>> => {
  const request = new HttpRequest.Builder(BASE_URL + `${identifier}/${identifier}-online.xml`).build();
  const response = await send(request);

  const content = parseXML(await response.toString());
  // @ts-expect-error : not typed yet !
  return content.root.online.map(decodeOnlineService);
};
