export interface residence {
  address: string;
  albumUrl: string;
  appointmentUrl: string;
  bookingUrl: string;
  contact: string;
  crousAndGoUrl: string;
  house_services: "" | {
    house_service: Array<string>;
  };
  id: string;
  images: "" | {
    url: Array<string>;
  };
  infos: string;
  internetUrl: string;
  lat: string;
  lon: string;
  mail: string;
  openingHours: string;
  phone: string;
  services: string;
  short_desc: string;
  title: string;
  troubleshootingUrl: string;
  virtualVisitUrl: string;
  zone: string;
}
