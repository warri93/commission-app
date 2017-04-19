import {Component, OnInit} from '@angular/core';
import {CommissionBackEndService, Assignment} from '../../commission-back-end.service';

@Component({
  selector: 'app-searchassignment',
  templateUrl: 'searchassignment.html',
  styleUrls: ['searchassignment.css']
})
export class SearchassignmentComponent implements OnInit {

  private errorMessage;
  private orderNumber:string = "";
  private orderLineNumber:string = "";
  private relinkOrderLineNumber ="";
  private relinkOrderNumber
  private results:Assignment[] = [];
  private dataLoaded = 0;
  private relinkResponse;

  constructor(private commissionService:CommissionBackEndService) {
  }

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
