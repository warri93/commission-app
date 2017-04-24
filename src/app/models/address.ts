import {Country} from "./country";
export class Address {
  reference: string;
  addressLine: string;
  addressLine2: string;
  addressName: string;
  cityName: string;
  country: Country;
  countrySubEntityCode: string;
  postalZone: string;

  constructor() {
    this.reference = "";
    this.addressLine = "";
    this.addressLine2 = "";
    this.addressName = "";
    this.cityName = "";
    this.country = new Country();
    this.countrySubEntityCode = "";
    this.postalZone = "";
  }
}
