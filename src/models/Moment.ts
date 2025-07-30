import type { Restaurant } from "~/models";

/**
 * Each moment of the day.
 *
 * Values are very important since they match {@link Restaurant|restaurants'} `opening` day value.
 */
export enum Moment {
  Evening = 2,
  Lunch = 1,
  Morning = 0
}
