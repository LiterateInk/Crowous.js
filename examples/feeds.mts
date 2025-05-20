import * as crous from "crowous";

const feeds = await crous.feeds();

for (const feed of feeds) {
  console.log(`${feed.name} (${feed.identifier})`);
}
