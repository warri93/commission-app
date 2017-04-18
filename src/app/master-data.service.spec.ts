/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MasterDataService } from './master-data.service';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';

describe('Service: MasterData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MasterDataService]
    });
  });

  it('should ...', inject([MasterDataService], (service: MasterDataService) => {
    expect(service).toBeTruthy();
  }));
});
