import {Component} from '@angular/core';
import {CommissionBackEndService, Assignment} from '../../../commission-back-end.service';
import {AssignmentService} from "../assignment.service";
import {AssignmentRule} from "../../../models/assignment-rule";

@Component({
  selector: 'search-assignment',
  templateUrl: 'search-assignment.html'
})
export class SearchAssignment {

  private errorMessage;
  private orderNumber:string = "";
  private orderLineNumber:string = "";
  private relinkOrderLineNumber ="";
  private relinkOrderNumber;
  private results:Assignment[] = [];
  private dataLoaded = 0;
  private relinkResponse;

  assignmentRules: AssignmentRule[];

  constructor(
    private commissionService:CommissionBackEndService,
    private assignmentService: AssignmentService
  ) {
  }

  searchAssignments(ravagoEntityID) {
    this.assignmentService.searchAssignment(ravagoEntityID).subscribe(assignmentRules => {
      this.assignmentRules = assignmentRules;
    })
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
        console.log("DONE GETTING ASSIGNMENTS");
        this.dataLoaded = 1;
      });
  }

  relinkOrder(){
    console.log("relink");
    this.commissionService.relink(this.relinkOrderNumber,this.relinkOrderLineNumber).subscribe(
      response => this.relinkResponse = response,
      err => {
        this.errorMessage = err;
        console.log("ERROR : " + this.errorMessage);
      },
      () => {
        console.log("DONE RELINKING ORDER");
      });
  }


  clear() {
    this.results = [];
    this.orderNumber = "";
    this.orderLineNumber = "";
  }
}
