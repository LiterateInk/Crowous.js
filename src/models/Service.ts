export class Service {
  /** @internal */
  constructor(
    public id: string,
    public imageUrl: string,
    public description: null | string,
    public title: string,
    public url: string
  ) {}
}
