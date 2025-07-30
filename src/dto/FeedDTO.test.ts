import feeds from "@!/feeds.json";
import { describe, expect, it } from "bun:test";
import { FeedDTO } from "./FeedDTO";

describe("FeedDTO", () => {
  it("should decode [0] to domain properly", () => {
    const feed = new FeedDTO(feeds.results[0]).toDomain();
    expect(feed.identifier).toBe("aix.marseille");
    expect(feed.isDefault).toBe(false);
    expect(feed.name).toBe("AIX-MARSEILLE");
  });

  it("should decode [1] to domain properly", () => {
    const feed = new FeedDTO(feeds.results[1]).toDomain();
    expect(feed.identifier).toBe("amiens");
    expect(feed.isDefault).toBe(false);
    expect(feed.name).toBe("AMIENS");
  });

  it("should decode [2] to domain properly", () => {
    const feed = new FeedDTO(feeds.results[2]).toDomain();
    expect(feed.identifier).toBe("reunion");
    expect(feed.isDefault).toBe(false);
    expect(feed.name).toBe("LA REUNION");
  });
});
