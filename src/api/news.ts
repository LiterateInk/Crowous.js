import type * as definitions from "~/definitions";
import { HttpRequest, send } from "schwi";
import { BASE_URL } from "~/core/constants";
import { parseXML } from "~/core/xml";
import { Article } from "~/models";

export const news = async (identifier: string): Promise<Array<Article>> => {
  const request = new HttpRequest.Builder(BASE_URL + `${identifier}/externe/actu.xml`).build();
  const response = await send(request);

  const content = parseXML<{
    article: Array<definitions.article>;
  }>(await response.toString());

  return content.root.article.map(Article.fromJSON);
};
