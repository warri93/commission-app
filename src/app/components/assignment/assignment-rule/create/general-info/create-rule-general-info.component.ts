import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Observable} from "rxjs";
import {FormControl, FormGroup} from '@angular/forms';
import {MasterDataService} from "../../../../../master-data.service";
import {RavagoEntity} from "../../../../../models/ravago-entity";
import {Customer} from "../../../../../models/customer";

@Component({
  selector: 'create-rule-general-info',
  templateUrl: 'create-rule-general-info.html'
})
export class CreateRuleGeneralInfo implements OnInit {
  legalEntities = [];
  customers = [];

  @Input()
  newRule;

  @Output()
  formChanged = new EventEmitter();

  constructor(
    private masterDataService: MasterDataService
  ) {}

  ngOnInit(): void {
    this.getLegalEntities();
    this.getCustomers();
  }

  getLegalEntities() {
    this.masterDataService.getLegalEntities().subscribe(data => {
      this.legalEntities = data;
    })
  }

  getCustomers() {
    this.customers = this.masterDataService.getCustomers();
  }

  searchLegalEntity = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 1 ? []
        : this.legalEntities.filter(v =>
          v.callSign.toLowerCase().startsWith(term.toLocaleLowerCase()) ||
          v.ID.toLowerCase().startsWith(term.toLocaleLowerCase()) ||
          (v.localName ? v.localName.toLowerCase().startsWith(term.toLocaleLowerCase()) : '') ||
          v.name.toLowerCase().startsWith(term.toLocaleLowerCase())
        ).splice(0, 10));

  ravagoEntityChanged(item) {
    console.log(item);
    /*this.newRule.controls['ravagoEntity'].setValue(null);*/
    //this.newRule.controls.ravagoEntity.patchValue(item);
    this.newRule.controls.ravagoEntity.patchValue({reference: item.reference, callSign: item.callSign});
    console.log(this.newRule.controls.ravagoEntity);
    /*(this.newRule.controls.ravagoEntity).setValue(ravagoEntity);
    console.log(this.newRule);
    this.formChanged.emit(this.newRule);*/
   /* let ravagoEntity = this.newRule.value.ravagoEntity as FormControl;
    console.log(ravagoEntity);
    ravagoEntity.setValue(new RavagoEntity(event.ID, event.callSign));*/
    /*this.newRule.value.ravagoEntity.value = new RavagoEntity(event.ID, event.callSign);
    console.log(this.newRule.value.ravagoEntity);*/
  }

  customerChanged(event) {
    this.newRule.value.customer = new Customer(event.ID, event.callSign);
  }

  searchCustomer = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 1 ? []
        : this.customers.filter(v =>
          v.callSign.toLowerCase().startsWith(term.toLocaleLowerCase()) ||
          v.ID.toLowerCase().startsWith(term.toLocaleLowerCase()) ||
          (v.localName ? v.localName.toLowerCase().startsWith(term.toLocaleLowerCase()) : '') ||
          v.name.toLowerCase().startsWith(term.toLocaleLowerCase())
        ).splice(0, 10));

  formatEntity = (x: {callSign: string}) => x.callSign;
}
