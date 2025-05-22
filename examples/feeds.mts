import { getFeeds } from "crowous";

const feeds = await getFeeds();

for (const feed of feeds) {
  console.log(`${feed.name} (${feed.identifier})`);
}
