import {Component, Input, OnInit} from '@angular/core';
import {SalesPerson} from "../../../../models/salesPerson";
import {Observable} from "rxjs";
import {Assignee} from "../../../../models/assignee";
import {FormArray, FormControl, FormBuilder} from "@angular/forms";

@Component({
  selector: 'create-refinement-rule-sales-persons',
  templateUrl: 'create-refinement-rule-sales-persons.html'
})
export class CreateRefinementRuleSalesPersons implements OnInit {
  @Input()
  newRefinementRule;

  salesPersons: SalesPerson[];

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.salesPersons = [
      {
        "reference": "113047",
        "firstName": "Robert",
        "familyName": "O'Donnell"
      },
      {
        "reference": "234",
        "firstName": "Melissa",
        "familyName": "Warrens"
      },
      {
        "reference": "SDFSF",
        "firstName": "Bart",
        "familyName": "Jans"
      }
    ];
  }

  searchSalesPerson = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 1 ? []
        : this.salesPersons.filter(v =>
          v.firstName.toLowerCase().startsWith(term.toLocaleLowerCase()) ||
          v.familyName.toLowerCase().startsWith(term.toLocaleLowerCase())
        ).splice(0, 10));

  formatSalesPerson = (x: {firstName: string, familyName: string}) => x.firstName + " " + x.familyName;

  addSalesPerson() {
    const control = this.newRefinementRule.get('assignmentValues').get('assignees') as FormArray;
    control.push(this.createAssignee());
  }

  createAssignee() {
    return this.fb.group({
      salesVolumePercentage: new FormControl(""),
      commissionPercentage: new FormControl(""),
      salesPerson: new FormControl(new SalesPerson())
    })
  }
}
