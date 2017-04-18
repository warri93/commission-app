import {Customer, AssignmentRule, AssignmentValue, RavagoEntity} from "../commission-back-end.service";


export class AssignmentRuleImpl implements AssignmentRule {

  ravagoEntity:RavagoEntity;
  customer:Customer;
  assignmentValues:AssignmentValue[];
  defaultAssignmentRuleID:string;

  constructor(ravagoEntity?:RavagoEntity, customer?:Customer, assignmentValues?:AssignmentValue[], defaultAssignmentRuleID?:string) {
    this.ravagoEntity = ravagoEntity;
    this.customer = customer;
    this.assignmentValues = assignmentValues;
    this.defaultAssignmentRuleID = defaultAssignmentRuleID;
  }
}
