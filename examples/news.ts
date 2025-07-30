import { getNewsFrom } from "crowous";

(async () => {
  const news = await getNewsFrom("limoges");

  for (const article of news) {
    console.log(`[${article.category}]: ${article.title}, published @ ${article.publishedAt.toLocaleDateString()}`);
    // You can retrieve the HTML content of the article by using `article.content`.
    // We're not doing it here to avoid cluttering the console.
  }
})();
