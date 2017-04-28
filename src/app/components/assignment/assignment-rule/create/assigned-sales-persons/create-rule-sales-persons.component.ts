import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {FormArray, FormControl, FormBuilder} from "@angular/forms";
import {SalesPerson} from "../../../../../models/salesPerson";

@Component({
  selector: 'create-rule-sales-persons',
  templateUrl: 'create-rule-sales-persons.html'
})
export class CreateRuleSalesPersons implements OnInit {
  @Input()
  newRule;

  salesPersons: SalesPerson[];
  salesVolumeTotal: number;
  commissionTotal: number;

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
    const control = this.newRule.get('assignmentValues').get('assignees') as FormArray;
    control.push(this.createAssignee());
  }

  deleteSalesPerson(index) {
    const assignees = this.newRule.get('assignmentValues').get('assignees') as FormArray;
    assignees.removeAt(index);
    console.log(this.newRule.get('assignmentValues').get('assignees').value);
  }

  salesPersonSelected(item, index) {
    this.newRule.get('assignmentValues').get('assignees').value[index].salesPerson = item.item;
  }

  createAssignee() {
    return this.fb.group({
      salesVolumePercentage: new FormControl(""),
      commissionPercentage: new FormControl(""),
      salesPerson: new FormControl(new SalesPerson())
    })
  }

  recalculateCommissionTotal(value) {
    if(value === "") {
      return;
    }

    let commissionPercentage = 0;

    let assignees = this.newRule.get('assignmentValues').get('assignees').value;
    assignees.forEach(function(assignee) {
      commissionPercentage += assignee.commissionPercentage
    });

    this.commissionTotal = commissionPercentage / 100;
  }

  recalculateSalesVolumeTotal(value) {
    if(value === "") {
      return;
    }

    let salesVolumePercentage = 0;

    let assignees = this.newRule.get('assignmentValues').get('assignees').value;
    assignees.forEach(function(assignee) {
      salesVolumePercentage += assignee.salesVolumePercentage
    });

    this.salesVolumeTotal = salesVolumePercentage / 100;
  }
}
