import type * as definitions from "~/definitions";

export class Feed {
  constructor(
    public identifier: string,
    public isDefault: boolean,
    public name: string
  ) {}

  static fromJSON(json: definitions.feed): Feed {
    const name = json.name.replace("FLUX ", "");
    const identifier = json.url.split("/")[4];

    return new Feed(
      identifier,
      json.is_default,
      name
    );
  }
};
