import type * as definitions from "~/definitions";
import { ContactDTO, ImageDTO, MenuDTO, PaymentMethodDTO, RestaurantKindDTO } from "~/dto";
import { Restaurant } from "~/models";

export class RestaurantDTO {
  constructor(private json: definitions.restaurant) {}

  toDomain(): Restaurant {
    return new Restaurant(
      this.json.access || null,
      this.json.accessibility,
      this.json.adresse,
      this.json.album ? new ImageDTO(this.json.album).toModel() : null,
      this.json.area,
      this.json.closing,
      new ContactDTO(this.json.contact).toModel(),
      this.json.crousandgo || null,
      this.json.description,
      this.json.id,
      new RestaurantKindDTO(this.json.type).toModel(),
      this.json.lat === 0 ? null : this.json.lat,
      this.json.lon === 0 ? null : this.json.lon,
      this.json.menus.map((menu) => new MenuDTO(menu).toModel()),
      this.json.opening,
      this.json.operationalhours,
      this.json.payment.map((method) => new PaymentMethodDTO(method.name).toModel()),
      new ImageDTO(this.json.photo).toModel(),
      this.json.shortdesc,
      this.json.title,
      this.json.wifi
    );
  }
}
