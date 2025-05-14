import type { Contact } from "~/models";

export const decodeContact = (contact: any): Contact => {
  return {
    email: contact.email,
    phone: contact.tel
  };
};
