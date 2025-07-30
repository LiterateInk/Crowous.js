export enum Moment {
  Evening,
  Lunch,
  Morning
}

// eslint-disable-next-line ts/no-namespace
export namespace Moment {
  /**
   * An opening day string looks like this: `001`, for example.
   * There's three numbers because it is actually "morning, lunch, evening" values.
   * `0` means closed, `1` means opened.
   *
   * This function retrieves the proper index depending on a given `Moment` value.
   */
  export function toOpeningDayIndex(moment: Moment): 0 | 1 | 2 {
    switch (moment) {
      case Moment.Evening: return 2;
      case Moment.Lunch: return 1;
      case Moment.Morning: return 0;
    }
  }
}
