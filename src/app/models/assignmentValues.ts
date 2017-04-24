import {Period} from "./period";
import {Assignee} from "./assignee";

export class AssignmentValues {
  period: Period;
  assignee: Assignee[];

  constructor () {
    this.period = new Period();
    this.assignee = [];
  }
}
