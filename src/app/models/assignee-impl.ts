import {Assignee, SalesPerson} from "../commission-back-end.service";
export class AssigneeImpl implements Assignee{
  salesVolumePercentage:string;
  commissionPercentage:string;
  salesPerson:SalesPerson;
  
  constructor(salesVolumePercentage:string, commissionPercentage:string, salesPerson:SalesPerson) {
      this.salesVolumePercentage = salesVolumePercentage;
      this.commissionPercentage = commissionPercentage;
      this.salesPerson = salesPerson;
    }
}
