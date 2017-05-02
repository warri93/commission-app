import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {FormArray, FormGroup, FormControl, FormBuilder} from "@angular/forms";
import {SalesPerson} from "../../../../../models/salesPerson";
import {Assignee} from "../../../../../models/assignee";

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
    console.log(this.newRule);
    this.salesPersons = [
      {
        "reference": "113040",
        "firstName": "Stuart",
        "familyName": "Portman"
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

  addSalesPerson(assignmentValueIndex) {
    /*this.newRule.controls.assignmentValues.controls[assignmentValueIndex].controls.assignees.controls.push(this.createAssignee());*/
    /*const control = this.newRule.value.assignmentValues[assignmentValueIndex].assignees as FormArray;
    console.log(control);
    control.push(this.createAssignee());
    console.log(this.newRule);*/
  }

  deleteSalesPerson(assignmentValueIndex, assigneeIndex) {
    /*console.log(assignmentValueIndex);
    console.log(assigneeIndex);
    console.log(this.newRule.value.assignmentValues[assignmentValueIndex].assignees);
    const assignees = this.newRule.value.assignmentValues[assignmentValueIndex].assignees as FormArray;
    assignees.removeAt(assigneeIndex);*/
    /*const assignees = this.newRule.controls.assignmentValues.controls[assignmentValueIndex].controls.assignees.controls as FormGroup;
    console.log(assignees);
    assignees.removeControl(assigneeIndex);*/
  }

  salesPersonSelected(item, assignmentValueIndex, assigneeIndex) {
    this.newRule.get('assignmentValues').value[assignmentValueIndex].assignees[assigneeIndex].salesPerson = item.item;
  }

  createAssignee() {
    return this.fb.group({
      salesVolumePercentage: new FormControl(""),
      commissionPercentage: new FormControl(""),
      salesPerson: new FormControl("")
    })
  }

  recalculateCommissionTotal(index, value) {
    if(value === "") {
      return;
    }

    let commissionPercentage = 0;

    let assignees = this.newRule.get('assignmentValues').value[index].assignees;
    assignees.forEach(function(assignee) {
      commissionPercentage += assignee.commissionPercentage
    });

    this.commissionTotal = commissionPercentage / 100;
  }

  recalculateSalesVolumeTotal(index, value) {
    if(value === "") {
      return;
    }

    let salesVolumePercentage = 0;

    let assignees = this.newRule.get('assignmentValues').value[index].assignees;
    assignees.forEach(function(assignee) {
      salesVolumePercentage += assignee.salesVolumePercentage
    });

    this.salesVolumeTotal = salesVolumePercentage / 100;
  }
}
