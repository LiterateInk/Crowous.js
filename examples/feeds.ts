import { getFeeds } from "crowous";

(async () => {
  const feeds = await getFeeds();

  for (const feed of feeds) {
    console.log(`${feed.name} (${feed.identifier})`);

    // We can call methods directly on the feed.
    const restaurants = await feed.getRestaurants();
    console.log("=> found", restaurants.length, "restaurants");
  }
})();
