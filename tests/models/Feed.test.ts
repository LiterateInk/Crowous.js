import feeds from "@!/feeds.json";
import { describe, expect, it } from "bun:test";
import { deserialize } from "desero";
import { Feed } from "~/models";

describe("FeedDTO", () => {
  it("should decode [0] to domain properly", () => {
    const feed = deserialize(Feed, feeds.results[0]);
    expect(feed.identifier).toBe("aix.marseille");
    expect(feed.isDefault).toBe(false);
    expect(feed.name).toBe("AIX-MARSEILLE");
  });

  it("should decode [1] to domain properly", () => {
    const feed = deserialize(Feed, feeds.results[1]);
    expect(feed.identifier).toBe("amiens");
    expect(feed.isDefault).toBe(false);
    expect(feed.name).toBe("AMIENS");
  });

  it("should decode [2] to domain properly", () => {
    const feed = deserialize(Feed, feeds.results[2]);
    expect(feed.identifier).toBe("reunion");
    expect(feed.isDefault).toBe(false);
    expect(feed.name).toBe("LA REUNION");
  });
});
