import {Component, Input} from '@angular/core';

@Component({
  selector: 'assignments-table',
  templateUrl: 'assignments-table.html'
})
export class AssignmentsTable {
  @Input()
  assignmentRules;
}
