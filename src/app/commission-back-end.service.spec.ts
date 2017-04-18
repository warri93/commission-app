/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CommissionBackEndService } from './commission-back-end.service';

describe('Service: CommissionBackEnd', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommissionBackEndService]
    });
  });

  it('should ...', inject([CommissionBackEndService], (service: CommissionBackEndService) => {
    expect(service).toBeTruthy();
  }));
});
