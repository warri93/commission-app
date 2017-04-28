import {Component, OnInit, Input} from '@angular/core';
import {MasterDataService} from "../../../../master-data.service";
import {Observable} from "rxjs";
import {FormGroup} from "@angular/forms";
import {RavagoEntity} from "../../../../models/ravago-entity";
import {Customer} from "../../../../models/customer";

@Component({
  selector: 'create-refinement-rule-general-info',
  templateUrl: 'create-refinement-rule-general-info.html'
})
export class CreateRefinementRuleGeneralInfo implements OnInit {
  legalEntities = [];
  customers = [];

  @Input()
  newRefinementRule;

  constructor(
    private masterDataService: MasterDataService
  ) {

  }

  ngOnInit(): void {
    this.getLegalEntities();
    this.getCustomers();
  }

  ravagoEntityChanged(event) {
    this.newRefinementRule.value.ravagoEntity = new RavagoEntity(event.ID, event.callSign);
  }

  customerChanged(event) {
    this.newRefinementRule.value.customer = new Customer(event.ID, event.callSign);
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

  legalEntitySelected(item) {
    console.log(item);
    console.log("legal entity selected");
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
