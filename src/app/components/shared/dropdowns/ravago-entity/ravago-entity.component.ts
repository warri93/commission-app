import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {MasterDataService} from "../../../../master-data.service";

import {Observable} from "rxjs";

@Component({
  selector: 'ravago-entity-dropdown',
  templateUrl: 'ravago-entity.html'
})
export class RavagoEntityDropdown implements OnInit{
  @Output()
  ravagoEntityChanged = new EventEmitter();

  legalEntities;

  constructor(
    private masterDataService: MasterDataService
  ) {

  }

  ngOnInit() {
    this.getLegalEntities();
  }

  getLegalEntities() {
    this.masterDataService.getLegalEntities().subscribe(legalEntities => {
      this.legalEntities = legalEntities;
      console.log(this.legalEntities);
    })
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

  formatEntity = (x: {callSign: string}) => x.callSign;

  legalEntitySelected(item) {
    console.log(item.item);
    this.ravagoEntityChanged.emit(item.item);
  }
}
