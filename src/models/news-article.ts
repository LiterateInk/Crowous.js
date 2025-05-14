export type NewsArticle = Readonly<{
  category: string;
  /**
   * HTML string.
   */
  content: string;
  id: string;
  imageURL: string;
  publicationDate: Date;
  title: string;
}>;
