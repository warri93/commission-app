import {SalesPerson} from "./salesPerson";

export class Assignee {
  salesVolumePercentage: string;
  commissionPercentage: string;
  salesPerson: SalesPerson;

  constructor () {
    this.salesVolumePercentage = "";
    this.commissionPercentage = "";
    this.salesPerson = new SalesPerson();
  }
}
