import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {MasterDataService} from "../../../../master-data.service";

import {Observable} from "rxjs";

@Component({
  selector: 'customer-dropdown',
  templateUrl: 'customer.html'
})
export class CustomerDropdown implements OnInit{
  @Input()
  form;

  @Output()
  customerChanged = new EventEmitter();

  customers;

  constructor(
    private masterDataService: MasterDataService
  ) {

  }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers() {
    this.customers = [
      {
        callSign: "sdlk",
        reference: "lsfkdj"
      },
      {
        callSign: "sdlk",
        reference: "lsfkdj"
      },
      {
        callSign: "sdlk",
        reference: "lsfkdj"
      }
    ]
  }

  searchCustomer = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 1 ? []
        : this.customers.filter(v =>
          v.callSign.toLowerCase().startsWith(term.toLocaleLowerCase()) ||
          v.reference.toLowerCase().startsWith(term.toLocaleLowerCase())
        ).splice(0, 10));

  formatCustomer = (x: {callSign: string}) => x.callSign;

  customerSelected(item) {
    console.log("customer selected");
    this.customerChanged.emit(item.item);
  }
}
