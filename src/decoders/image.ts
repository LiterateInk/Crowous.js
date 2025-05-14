import type { Image } from "~/models";

export const decodeImage = (image: any): Image => {
  return {
    description: image.alt,
    href: image.src
  };
};
