import type * as definitions from "~/definitions";
import { Feed } from "~/models";

export class FeedDTO {
  constructor(private json: definitions.feed) {}

  toDomain(): Feed {
    return new Feed(
      this.identifier(),
      this.json.is_default,
      this.name()
    );
  }

  private identifier(): string {
    return this.json.url.split("/")[4];
  }

  private name(): string {
    return this.json.name.replace("FLUX ", "");
  }
}
