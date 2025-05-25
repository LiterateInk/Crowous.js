export interface contact {
  email: string;
  tel: string;
}

export interface foodcategory {
  dishes: Array<{ name: string }>;
  name: string;
}

export interface image {
  alt: string;
  src: string;
}

export interface meal {
  foodcategory: Array<foodcategory>;
  name: string;
}

export interface menu {
  date: string;
  meal: Array<meal>;
}

export interface restaurant {
  access: string;
  accessibility: boolean;
  adresse: string;
  album?: image;
  area: string;
  closing: string;
  contact: contact;
  crousandgo: string;
  description: string;
  id: number;
  lat: number;
  lon: number;
  menus: Array<menu>;
  opening: string;
  operationalhours: string;
  payment: Array<{
    name: string;
  }>;
  photo: image;
  shortdesc: string;
  title: string;
  type: string;
  wifi: boolean;
}
