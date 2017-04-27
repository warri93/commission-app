import {AssignmentValues} from "./assignmentValues";
import {RavagoEntity} from "./ravago-entity";
import {Customer} from "./customer";
export class AssignmentRule {
  defaultAssignmentRuleID: string;
  ravagoEntity: RavagoEntity;
  customer: Customer;
  assignmentValues: AssignmentValues[];
}
