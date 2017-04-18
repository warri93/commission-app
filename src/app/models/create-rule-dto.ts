import {AssignmentValue, Customer, RavagoEntity, CreatorPerson} from "../commission-back-end.service";
import {RuleDTO} from "./create-rule";
export class RuleDTOimpl implements RuleDTO {
  creatorPerson:CreatorPerson;
  ravagoEntity:RavagoEntity;
  customer:Customer;
  assignmentValues:AssignmentValue[];


  constructor() {
    this.creatorPerson = new CreatorPerson();
    this.creatorPerson.firstName="Bert";
    this.creatorPerson.familyName="Huygens";
    this.creatorPerson.reference="740607255";

  }
}
