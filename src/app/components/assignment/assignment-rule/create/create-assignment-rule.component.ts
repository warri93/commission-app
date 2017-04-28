import { Component, OnInit  } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormArray, FormControl} from "@angular/forms";

import { AssignmentRule, CommissionBackEndService, Assignee } from "../../../../commission-back-end.service";
import { MasterDataService } from "../../../../master-data.service";
import { RavagoEntityImpl } from "../../../../models/ravago-entity-impl";
import { RuleDTOimpl } from "../../../../models/create-rule-dto";
import { AssignmentRuleImpl } from "../../../../models/assignment-rule-impl";
import { CustomerImpl } from "../../../../models/customer-impl";
import { AssignmentValueImpl } from "../../../../models/assignment-value-impl";
import { PeriodImpl } from "../../../../models/period-impl";
import { AssigneeImpl } from "../../../../models/assignee-impl";
import { SalesPersonImpl } from "../../../../models/sales-person-impl";

import {Observable} from 'rxjs/Observable';
import {SalesPerson} from "../../../../models/salesPerson";
import {RavagoEntity} from "../../../../models/ravago-entity";
import {Customer} from "../../../../models/customer";

@Component({
  selector: 'create-assignment-rule',
  templateUrl: 'create-assignment-rule.html'
})
export class CreateAssignmentRule implements OnInit {
  public errorMessage;
  public createResponse;
  entities : RavagoEntityImpl[];
  customers : CustomerImpl[];
  salesPersons: SalesPerson[] = [];
  public createForm : FormGroup;

  newRule: FormGroup;

  constructor(
    private commissionService:CommissionBackEndService,
    private masterDataService :MasterDataService,
    private fb: FormBuilder) {

  }

  ngOnInit() {
    this.newRule = this.fb.group({
      customer: new FormControl(new Customer(), Validators.required),
      ravagoEntity: new FormControl(new RavagoEntity(), Validators.required),
      assignmentValues: this.fb.group({
        period: this.fb.group({
          startDate: new FormControl("", Validators.required),
          endDate: new FormControl("")
        }),
        assignees: this.fb.array([
          this.createAssignee()
        ])
      })
    });

    this.entities = [
      new RavagoEntityImpl("533714","MUEHLSTEIN"),
      new RavagoEntityImpl("597612","MUEHLSTEIN CA"),
      new RavagoEntityImpl("515785","CPA")
    ];

    this.customers = [
      new CustomerImpl("587505","CHANNEL PRIME ALLIANCE CANADA"),
      new CustomerImpl("515785","CHANNEL PRIME ALLIANCE "),
      new CustomerImpl("634632","QUALITY RESIN SOLUTIONS"),
      new CustomerImpl("553932","ABM NORTH AMERICA CORP"),
      new CustomerImpl("630133","ABSA RESIN TECHNOLOGIES INC"),
      new CustomerImpl("630146","AIR MOLDED PLASTICS"),
      new CustomerImpl("630150","ALLIANCE HANGER INC"),
      new CustomerImpl("630254","CRAWLING VALLEY PLASTICS LIMITED"),
      new CustomerImpl("630166","AMPACET CANADA COMPANY"),
      new CustomerImpl("630173","APOLLO HEALTH AND BEAUTY CARE"),
      new CustomerImpl("630178","ARMAGEDON GLOBAL ENERGY SOLUTIONS CORP"),
      new CustomerImpl("630180","ARMTEC LIMITED PARTNERSHIP")
    ];

    /*this.masterDataService.getSalesPersons(le.reference,cu.reference).subscribe(
      salesPersons => this.salesPersons = salesPersons,
      err => this.errorMessage = err,
      () => console.log("Done getting  : " + JSON.stringify(this.salesPersons))
    );*/
  }

  createAssignee() {
    return this.fb.group({
      salesVolumePercentage: new FormControl("", Validators.required),
      commissionPercentage: new FormControl("", Validators.required),
      salesPerson: new FormControl(new SalesPerson(), Validators.required)
    })
  }

  addSalesPerson() {
    const control = <FormArray>this.createForm.controls['salespersons'];
    control.push(this.initSalesPerson());
  }

  saveRule() {
    console.log("save refinement");
    console.log(this.newRule);
  }

  confirmRule() {
    console.log("Confirm refinement");
    console.log(this.newRule);
  }

  setRavagoEntity(value) {
    console.log(value);
  }

  save(create : FormGroup){
    var ruleDto = new RuleDTOimpl();
    ruleDto.customer = new CustomerImpl(this.createForm.controls['customer'].value.reference,this.createForm.controls['customer'].value.callSign);
    ruleDto.ravagoEntity = new RavagoEntityImpl(this.createForm.controls['legalEntity'].value.reference,this.createForm.controls['legalEntity'].value.callSign);

    var assignmentValues :AssignmentValueImpl[] = [];
    var assignees : Assignee[] = [];
    var salesreps = this.createForm.controls['salespersons'].value;

    for(var sp of salesreps){
      console.log("add" + sp.selectcommission);
      var curSp = new SalesPersonImpl(sp.salesperson.ID,sp.salesperson.firstName,sp.salesperson.lastName);
      var currentAssignee = new AssigneeImpl(sp.selectSalesVolume,sp.selectcommission,curSp);
      assignees.push(currentAssignee);
    }

    var period : PeriodImpl = new PeriodImpl(this.createForm.controls['startDate'].value,this.createForm.controls['endDate'].value)
    var assignmentToAdd = new AssignmentValueImpl(period,assignees);

    assignmentValues.push(assignmentToAdd);

    ruleDto.assignmentValues = assignmentValues;
    this.commissionService.createDefaultRule(ruleDto).subscribe(
      response => { console.log("Create rule status : " + response);},
      err => this.errorMessage = err,
      () => console.log("Done")
    );
  }

  model : AssignmentRule = new AssignmentRuleImpl();

  private diagnostic() { return JSON.stringify(this.model); }

  public fillSalesPersons(){
    /*var le = this.createForm.get('legalEntity').value;
    var cu = this.createForm.controls['customer'].value;
    this.masterDataService.getSalesPersons(le.reference,cu.reference).subscribe(
      salesPersons => this.salesPersons = salesPersons,
      err => this.errorMessage = err,
      () => console.log("Done getting  : " + JSON.stringify(this.salesPersons))
    );*/
  }

  private initSalesPerson() {
    return this.fb.group({
      salesperson: [''],
      selectcommission : [''],
      selectSalesVolume : ['']
    });
  }

  searchLegalEntity = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? []
        : this.entities.filter(v =>
          v.callSign.toLowerCase().startsWith(term.toLocaleLowerCase()) ||
          v.reference.toLowerCase().startsWith(term.toLocaleLowerCase())
        ).splice(0, 10));

  searchCustomer = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? []
        : this.customers.filter(v =>
          v.callSign.toLowerCase().startsWith(term.toLocaleLowerCase()) ||
          v.reference.toLowerCase().startsWith(term.toLocaleLowerCase())
        ).splice(0, 10));

  formatEntity = (x: {callSign: string}) => x.callSign;

  searchSalesPerson = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? []
        : this.customers.filter(v =>
          v.callSign.toLowerCase().startsWith(term.toLocaleLowerCase()) ||
          v.reference.toLowerCase().startsWith(term.toLocaleLowerCase())
        ).splice(0, 10));
}
