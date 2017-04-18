import {AssignmentValue, Assignee, Period} from "../commission-back-end.service";
export class AssignmentValueImpl implements AssignmentValue{
  period:Period;
  assignees:Assignee[];
  
  constructor(period:Period, assignees:Assignee[]) {
      this.period = period;
      this.assignees = assignees;
      }
}
