
import {RavagoEntityImpl} from "./ravago-entity-impl";
import {CustomerImpl} from "./customer-impl";
import {SalesPersonImpl} from "./sales-person-impl";

export class SearchCriteria {

  legalEntity : RavagoEntityImpl[] =[];
  customer : CustomerImpl[] = [];
  salesperson : SalesPersonImpl[] = [];
  targetDate : string ="";

  constructor(){
    this.legalEntity = null;
    this.customer = null;
    this.salesperson = null;
    this.targetDate = null;
  }
}
