export class Article {
  constructor(
    public category: string,
    public content: string,
    public id: string,
    public imageUrl: string,
    public publicationDate: Date,
    public title: string
  ) {}
}
