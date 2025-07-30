import type * as definitions from "~/definitions";
import translateBreaklines from "~/core/translateBreaklines";
import { ContactDTO, ImageDTO, MenuDTO, PaymentMethodDTO, RestaurantKindDTO } from "~/dto";
import { Restaurant } from "~/models";

export class RestaurantDTO {
  constructor(private json: definitions.restaurant) {}

  toDomain(): Restaurant {
    const description = translateBreaklines(this.json.description).trim();
    const shortDescription = this.json.shortdesc.trim();
    let operationalHours: null | string = null;

    if (this.json.operationalhours) {
      operationalHours = translateBreaklines(this.json.operationalhours).trim();
    }

    return new Restaurant(
      this.json.access || null,
      this.json.accessibility,
      this.json.adresse,
      this.json.album ? new ImageDTO(this.json.album).toModel() : null,
      this.json.area,
      this.json.closing,
      new ContactDTO(this.json.contact).toModel(),
      this.json.crousandgo || null,
      description,
      this.json.id,
      new RestaurantKindDTO(this.json.type).toModel(),
      this.json.lat === 0 ? null : this.json.lat,
      this.json.lon === 0 ? null : this.json.lon,
      this.json.menus.map((menu) => new MenuDTO(menu).toModel()),
      this.json.opening,
      operationalHours,
      this.json.payment.map((method) => new PaymentMethodDTO(method.name).toModel()),
      new ImageDTO(this.json.photo).toModel(),
      shortDescription,
      this.json.title,
      this.json.wifi
    );
  }
}
