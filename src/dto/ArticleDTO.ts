import type * as definitions from "~/definitions";
import { Article } from "~/models";

export class ArticleDTO {
  constructor(private xml: definitions.article) {}

  toModel(): Article {
    return new Article(
      this.xml.category,
      this.xml.content,
      this.xml.id,
      this.xml.image,
      new Date(this.xml.date),
      this.xml.title
    );
  }
}
