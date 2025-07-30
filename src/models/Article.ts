/**
 * An article for a feed.
 */
export class Article {
  /** @internal */
  constructor(
    public category: string,
    public content: string,
    public id: string,
    public imageUrl: string,
    public publishedAt: Date,
    public title: string
  ) {}
}
