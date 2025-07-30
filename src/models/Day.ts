import type { Restaurant } from "~/models";

/**
 * Each day of the week.
 *
 * Values are very important since they match {@link Restaurant|restaurants'} `opening` day index.
 */
export enum Day {
  Friday = 4,
  Monday = 0,
  Saturday = 5,
  Sunday = 6,
  Thursday = 3,
  Tuesday = 1,
  Wednesday = 2
}
