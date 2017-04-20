import { Component, OnInit } from '@angular/core';
import { CommissionBackEndService } from '../../../commission-back-end.service';
import { AssignmentRule } from '../../../commission-back-end.service'

@Component({
  selector: 'assignment-rules-overview',
  templateUrl: 'assignment-rules-overview.html'
})
export class AssignmentRulesOverview implements OnInit {

  rules : AssignmentRule[];
  errorMessage : string;


  constructor (
    private commissionService: CommissionBackEndService
  ) {}
  ngOnInit() {
    this.getAssigmentRules();
  }

  getAssigmentRules(){
    console.log("get assignment rules");
    this.commissionService.getRules()
      .subscribe(
        rules => {this.rules = rules;},
        error =>  this.errorMessage = <any>error);
  }
}
