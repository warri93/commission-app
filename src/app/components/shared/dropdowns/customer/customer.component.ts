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
        ID: "lsfkdj",
        localName: "lskdfj",
        name: "ldslkfj"
      },
      {
        callSign: "sdlk",
        ID: "lsfkdj",
        localName: "lskdfj",
        name: "ldslkfj"
      },
      {
        callSign: "sdlk",
        ID: "lsfkdj",
        localName: "lskdfj",
        name: "ldslkfj"
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
          v.ID.toLowerCase().startsWith(term.toLocaleLowerCase()) ||
          (v.localName ? v.localName.toLowerCase().startsWith(term.toLocaleLowerCase()) : '') ||
          v.name.toLowerCase().startsWith(term.toLocaleLowerCase())
        ).splice(0, 10));

  formatCustomer = (x: {callSign: string}) => x.callSign;

  customerSelected(item) {
    this.customerChanged.emit(item.item);
  }
}
