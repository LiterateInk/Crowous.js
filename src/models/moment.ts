export enum Moment {
  EVENING = "EVENING",
  LUNCH = "LUNCH",
  MORNING = "MORNING"
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
      case Moment.EVENING: return 2;
      case Moment.LUNCH: return 1;
      case Moment.MORNING: return 0;
      default: throw new Error();
    }
  }
}
