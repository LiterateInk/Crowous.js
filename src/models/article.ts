import type * as definitions from "~/definitions";

export class Article {
  constructor(
    public category: string,
    public content: string,
    public id: string,
    public imageUrl: string,
    public publicationDate: Date,
    public title: string
  ) {}

  static fromXML(json: definitions.article): Article {
    return new Article(
      json.category,
      json.content,
      json.id,
      json.image,
      new Date(json.date),
      json.title
    );
  }
}
