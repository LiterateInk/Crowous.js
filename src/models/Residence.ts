import { deserializeWith, rename, t, u } from "desero";

/**
 * @hideconstructor
 */
export class Residence {
  @deserializeWith(u.falsyToNull)
  address = t.option(t.string());

  @deserializeWith(u.falsyToNull)
  albumUrl = t.option(t.string());

  @deserializeWith(u.falsyToNull)
  appointmentUrl = t.option(t.string());

  @rename("zone")
  area = t.string();

  @deserializeWith(u.falsyToNull)
  bookingUrl = t.option(t.string());

  contact = t.string();

  @deserializeWith(u.falsyToNull)
  crousAndGoUrl = t.option(t.string());

  @deserializeWith(u.falsyToNull)
  @rename("short_desc")
  description = t.option(t.string());

  @rename("mail")
  email = t.string();

  @rename("infos")
  fullInformation = t.string();

  id = t.string();

  @deserializeWith((images) => typeof images === "object" ? images.url : [])
  images = t.array(t.string());

  @deserializeWith((services) => typeof services === "object" ? services.house_service : [])
  @rename("house_services")
  inHomeServices = t.array(t.string());

  @deserializeWith(parseFloat)
  @rename("lat")
  latitude = t.number();

  @rename("services")
  localServices = t.string();

  @deserializeWith(parseFloat)
  @rename("lon")
  longitude = t.number();

  @deserializeWith(u.falsyToNull)
  phone = t.option(t.string());

  title = t.string();

  @deserializeWith(u.falsyToNull)
  troubleshootingUrl = t.option(t.string());

  @deserializeWith(u.falsyToNull)
  virtualVisitUrl = t.option(t.string());

  @deserializeWith(u.falsyToNull)
  @rename("internetUrl")
  websiteUrl = t.option(t.string());
}
