import {
  RefinementRuleDTO, CreatorPerson, DestinationAddress, ProductSpecification,
  AssignmentValue
} from "../commission-back-end.service";
/**
 * Created by normal on 19/10/16.
 */
export class RefinementRuleDTOImpl implements RefinementRuleDTO{
  creatorPerson:CreatorPerson;
  defaultAssignmentRuleID:string;
  destinationAddress:DestinationAddress;
  productSpecification:ProductSpecification;
  assignmentValues:AssignmentValue[];

}
