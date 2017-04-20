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


  constructor (private commissionService: CommissionBackEndService) {}
  ngOnInit() {
    this.getAssigmentRules();
  }

  getAssigmentRules(){
    this.commissionService.getRules()
      .subscribe(
        rules => { console.log("getting the data"); this.rules = rules ; console.log(this.rules.toString + "done");},
        error =>  this.errorMessage = <any>error);
  }

}
