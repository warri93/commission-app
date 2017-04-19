import { Component, OnInit } from '@angular/core';
import {
  Assignment, CommissionBackEndService, AssignmentImpl,
  EditAssignmentDTOImpl
} from "../../commission-back-end.service";

@Component({
  selector: 'app-edit-assignment',
  templateUrl: 'edit-assignment.html',
  styleUrls: ['edit-assignment.css']
})
export class EditAssignmentComponent implements OnInit {
  private editResponse;

  constructor(private commissionService:CommissionBackEndService) { }

  private errorMessage;
  private orderNumber:string = "";
  private orderLineNumber:string = "";
  private results:Assignment[] = [];
  private dataLoaded = 0;

  private assignmentToEdit : Assignment = new AssignmentImpl();

  ngOnInit() {
  }

  search() {
    console.log("searching" + this.orderNumber + " / " + this.orderLineNumber);
    this.dataLoaded = 0;
    this.commissionService.searchAssignment(this.orderNumber, this.orderLineNumber).subscribe(
      assignments => this.results = assignments,
      err => {
        this.errorMessage = err;
        console.log("ERROR : " + this.errorMessage);
      },
      () => {
        this.assignmentToEdit = this.results[0];
        this.dataLoaded = 1;
      });
  }

  edit(){

    this.editResponse ="";
    this.errorMessage = "";

    let dto:EditAssignmentDTOImpl = new EditAssignmentDTOImpl();
    dto.comment = "Edit test";
    dto.assignmentAssignees = this.assignmentToEdit.assignmentAssignees;

    this.commissionService.editAssignment(this.assignmentToEdit.assignmentID,dto).subscribe(
      response => this.editResponse = response,
      err => {
        this.errorMessage = err;
        console.log("ERROR : " + this.errorMessage);
      },
      () => { console.log("Done editing")});
  }
}
