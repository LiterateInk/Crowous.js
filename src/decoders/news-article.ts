import type { NewsArticle } from "~/models";

export const decodeNewsArticle = (xml: any): NewsArticle => ({
  category: xml.category,
  content: xml.content,
  id: xml.id,
  imageURL: xml.image,
  publicationDate: new Date(xml.date),
  title: xml.title
});
