import {SalesPerson} from "../commission-back-end.service";
export class SalesPersonImpl implements SalesPerson{
  reference:string;
  firstName:string;
  familyName:string;


  constructor(reference:string, firstName:string, familyName:string) {
      this.reference = reference;
      this.firstName = firstName;
      this.familyName = familyName;
      }
}
