import type { NewsArticle } from "~/models";
import { HttpRequest, send } from "schwi";
import { BASE_URL } from "~/core/constans";
import { parseXML } from "~/core/xml";
import { decodeNewsArticle } from "~/decoders/news-article";

export const news = async (identifier: string): Promise<Array<NewsArticle>> => {
  const request = new HttpRequest.Builder(BASE_URL + `${identifier}/externe/actu.xml`).build();
  const response = await send(request);

  const content = parseXML(await response.toString());
  return content.root.article.map(decodeNewsArticle);
};
