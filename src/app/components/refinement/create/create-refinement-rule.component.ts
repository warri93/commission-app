import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormBuilder, FormArray, FormControl} from "@angular/forms";

import {
  CommissionBackEndService, AssignmentRule, AssigneeImpl, Assignee,
  DestinationAddress, DestinationAddressImpl, ProductSpecificationImpl, ProductSpecification
} from "../../../commission-back-end.service";
import {MasterDataService, DeliveryAddress} from "../../../master-data.service";
import {RefinementRuleDTOImpl} from "../../../models/create-refinement-dto";
import {AssignmentValueImpl} from "../../../models/assignment-value-impl";
import {PeriodImpl} from "../../../models/period-impl";
import {CreatorPersonImpl} from "../../../models/creator-person-impl";
import {CreatorPerson} from "../../../models/creator-person";
import {Address} from "../../../models/address";
import {Product} from "../../../models/product";
import {AssignmentValues} from "../../../models/assignmentValues";
import {SalesPerson} from "../../../models/salesPerson";

@Component({
  selector: 'create-refinement-rule',
  templateUrl: 'create-refinement-rule.html'
})
export class CreateRefinementRule implements OnInit {
  public rules: AssignmentRule[];
  public salesPersons: SalesPerson[];
  public addresses: DeliveryAddress[];
  public errorMessage: string;
  public createRefinementForm: FormGroup;
  public selectedDefault: AssignmentRule;
  private response;

  newRefinementRule: FormGroup;
  assignees: FormArray;

  constructor(private masterDataService: MasterDataService, private commissionService: CommissionBackEndService, private fb: FormBuilder) {
    /*this.newRefinementRuleForm = fb.group({
     name: fb.group({
     first: ['Nancy', Validators.minLength(2)],
     last: 'Drew',
     }),
     email: '',
     });*/
  }

  ngOnInit() {
    this.newRefinementRule = this.fb.group({
      destinationAddress: new FormControl(new Address()),
      assignmentValues: this.fb.group({
        period: this.fb.group({
          startDate: new FormControl(""),
          endDate: new FormControl("")
        }),
        assignees: this.fb.array([
          this.createAssignee()
        ])
      }),
      productSpecification: new FormControl(new Product())
    });
  }

  createAssignee() {
    return this.fb.group({
      salesVolumePercentage: new FormControl(""),
      commissionPercentage: new FormControl(""),
      salesPerson: new FormControl(new SalesPerson())
    })
  }

  saveRefinementRule() {
    console.log("save refinement");
    console.log(this.newRefinementRule);
  }

  confirmRefinementRule() {
    console.log("Confirm refinement");
    console.log(this.newRefinementRule);
  }

  getAssigmentRules() {
    this.commissionService.getRules()
      .subscribe(
        rules => {
          this.rules = rules;
        },
        error => this.errorMessage = <any>error),
      () => console.log("Done getting data for createrefinements");
  }

  public setDefault() {
    this.selectedDefault = this.createRefinementForm.controls['defaultRules'].value;
  }

  public addSalesPerson() {
    const control = <FormArray>this.createRefinementForm.controls['salespersons'];
    //control.push(this.initSalesPerson());
  }

  public addPeriod() {
    const control = <FormArray>this.createRefinementForm.controls['periods'];
    //control.push(this.initPeriod());
  }

  public create() {

    this.response = "";
    this.errorMessage = "";

    var refRuleDto: RefinementRuleDTOImpl = new RefinementRuleDTOImpl();
    refRuleDto.defaultAssignmentRuleID = this.createRefinementForm.controls['defaultRules'].value.defaultAssignmentRuleID;

    let selectedAddres: DeliveryAddress = this.createRefinementForm.controls['deliveryAddresses'].value;

    var productIDToSet: string = this.createRefinementForm.controls['productID'].value;

    var productSpecs: ProductSpecification = new ProductSpecificationImpl();

    productSpecs.productID = productIDToSet;

    var dest: DestinationAddress = new DestinationAddressImpl();
    if (selectedAddres) {
      dest.reference = selectedAddres.ID;
      dest.addressLine = selectedAddres.addressLine;
      dest.addressLine2 = selectedAddres.addressLine2;
      dest.addressName = selectedAddres.addressName;
      dest.cityName = selectedAddres.cityName;
      dest.country = selectedAddres.country;
      dest.countrySubEntityCode = selectedAddres.countrySubEntityCode;
      dest.postalZone = selectedAddres.postalZone;
      refRuleDto.destinationAddress = dest;
    }


    refRuleDto.productSpecification = productSpecs;

    var periodsToAdd = this.createRefinementForm.controls['periods'].value;
    var assignmentValues: AssignmentValueImpl[] = [];
    for (var period of periodsToAdd) {

      var assignees: Assignee[] = [];
      var salesPersonsToAdd = period.salespersons;

      for (var sp of salesPersonsToAdd) {
        //var curSp = new SalesPersonImpl(sp.salesperson.ID, sp.salesperson.firstName, sp.salesperson.lastName);
        //var currentAssignee = new AssigneeImpl(sp.selectSalesVolume, sp.selectcommission, curSp);
        //assignees.push(currentAssignee);
      }

      var periodToAdd: PeriodImpl = new PeriodImpl(period.startDate, period.endDate)
      var assignmentToAdd = new AssignmentValueImpl(periodToAdd, assignees);
      assignmentValues.push(assignmentToAdd);
    }

    refRuleDto.assignmentValues = assignmentValues;
    refRuleDto.creatorPerson = new CreatorPersonImpl("740607", "Bert", "Huygens");

    console.log(JSON.stringify(refRuleDto));

    this.commissionService.createRefinementRule(refRuleDto).subscribe(
      response => {
        this.response = response;
      },
      err => this.errorMessage = err,
      () => {
        console.log("Done");
        this.createRefinementForm.reset();
      }
    );

  }

  public fillDeliveryAddresses() {
    var assignmentRule = this.createRefinementForm.controls['defaultRules'].value;
    this.masterDataService.getDeliveryAddresses(assignmentRule.customer.reference).subscribe(
      addresses => this.addresses = addresses,
      err => this.errorMessage = err,
      () => console.log("Done getting  : " + JSON.stringify(this.addresses))
    );
  }

  public fillSalesPersons() {
    var assignmentRule = this.createRefinementForm.controls['defaultRules'].value;
    this.masterDataService.getSalesPersons(assignmentRule.ravagoEntity.reference, assignmentRule.customer.reference).subscribe(
      //salesPersons => this.salesPersons = salesPersons,
      //err => this.errorMessage = err,
      () => console.log("Done getting  : " + JSON.stringify(this.salesPersons))
    );
  }

  private initPeriod() {
    /*var formGroup = this._fb.group({
     startDate : [''],
     endDate : [''],
     salespersons :this._fb.array([
     this.initSalesPerson()
     ])
     });
     return formGroup;*/
  }

  private initSalesPerson() {
    /*return this._fb.group({
     salesperson: [''],
     selectcommission : [''],
     selectSalesVolume : ['']
     });*/
  }
}
