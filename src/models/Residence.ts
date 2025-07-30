export class Residence {
  constructor(
    public address: null | string,
    public albumUrl: null | string,
    public appointmentUrl: null | string,
    public area: string,
    public bookingUrl: null | string,
    public contact: string,
    public crousAndGoUrl: null | string,
    public email: string,
    public fullInformation: string,
    public id: string,
    public images: string[],
    public inHomeServices: string[],
    public latitude: number,
    public localServices: string,
    public longitude: number,
    public phone: null | string,
    public description: null | string,
    public title: string,
    public troubleshootingUrl: null | string,
    public virtualVisitUrl: null | string,
    public websiteUrl: null | string
  ) {}
}
