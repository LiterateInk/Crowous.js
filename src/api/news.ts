import type * as definitions from "~/definitions";
import { HttpRequest, send } from "schwi";
import { BASE_URL } from "~/core/constants";
import { Article } from "~/models";

export async function getNewsFrom(identifier: string): Promise<Array<Article>> {
  const request = new HttpRequest.Builder(BASE_URL + `${identifier}/externe/actu.xml`).build();
  const response = await send(request);

  const xml = await response.toXML<{
    article: Array<definitions.article>;
  }>();

  return xml.root.article.map(Article.fromXML);
};
