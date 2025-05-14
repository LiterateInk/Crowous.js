import type { Home } from "~/models";

export const decodeHome = (xml: any): Home => ({
  address: xml.address || null,
  albumURL: xml.albumUrl || null,
  appointmentURL: xml.appointmentUrl || null,
  area: xml.zone,
  bookingURL: xml.bookingUrl || null,
  contactHTML: xml.contact,
  crousAndGoURL: xml.crousAndGoUrl || null,
  email: xml.mail,
  fullInformationHTML: xml.infos,
  id: xml.id,
  images: typeof xml.images === "object" ? xml.images.url : [],
  inHomeServices: typeof xml.house_services === "object" ? xml.house_services.house_service : [],
  latitude: parseFloat(xml.lat),
  localServicesHTML: xml.services,
  longitude: parseFloat(xml.lon),
  phone: xml.phone || null,
  shortDescription: xml.short_desc || null,
  title: xml.title,
  troubleshootingURL: xml.troubleshootingUrl || null,
  virtualVisitURL: xml.virtualVisitUrl || null,
  websiteURL: xml.internetUrl || null
});
