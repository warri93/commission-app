import {Component, OnInit, Input} from '@angular/core';
import {Observable} from "rxjs";
import {FormControl} from "@angular/forms";
import {MasterDataService} from "../../../../../master-data.service";
import {RavagoEntity} from "../../../../../models/ravago-entity";

@Component({
  selector: 'create-rule-general-info',
  templateUrl: 'create-rule-general-info.html'
})
export class CreateRuleGeneralInfo implements OnInit {
  legalEntities = [];
  customers = [];

  @Input()
  newRule;

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

  ravagoEntityChanged(event) {
    this.newRule.value.ravagoEntity = new RavagoEntity(event.ID, event.callSign);
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
