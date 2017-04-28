import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {MasterDataService} from "../../../../master-data.service";

import {Observable} from "rxjs";
import {RavagoEntity} from "../../../../models/ravago-entity";

@Component({
  selector: 'ravago-entity-dropdown',
  templateUrl: 'ravago-entity.html'
})
export class RavagoEntityDropdown implements OnInit{
  @Input()
  form;

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
    })
  }

  searchLegalEntity = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 1 ? []
        : this.legalEntities.filter(v =>
          v.callSign.toLowerCase().startsWith(term.toLocaleLowerCase()) ||
          v.reference.toLowerCase().startsWith(term.toLocaleLowerCase())
        ).splice(0, 10));

  formatEntity = (x: {callSign: string}) => x.callSign;

  legalEntitySelected(item) {
    this.ravagoEntityChanged.emit(new RavagoEntity(item.item.ID, item.item.callSign));
  }
}
