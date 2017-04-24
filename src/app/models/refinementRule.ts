import {CreatorPerson} from "./creator-person";
import {Product} from "./product";
import {AssignmentValues} from "./assignmentValues";
import {Address} from "./address";

export class RefinementRule {
  creatorPerson: CreatorPerson;
  defaultAssignmentRuleID: string;
  destinationAddress: Address;
  productSpecification: Product;
  assignmentValues: AssignmentValues[];

  constructor () {
    this.creatorPerson = new CreatorPerson();
    this.defaultAssignmentRuleID = "";
    this.destinationAddress = new Address();
    this.productSpecification = new Product();
    this.assignmentValues = [];
  }
}
