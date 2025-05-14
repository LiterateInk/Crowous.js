import type { OnlineService } from "~/models";

export const decodeOnlineService = (xml: any): OnlineService => ({
  id: xml.id,
  imageURL: xml.image,
  shortDescription: xml.short_desc || null,
  title: xml.title,
  url: xml.link
});
