import { TestBed, inject } from '@angular/core/testing';

import { LeasingOfficerServiceService } from './leasing-officer-service.service';

describe('LeasingOfficerServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeasingOfficerServiceService]
    });
  });

  it('should be created', inject([LeasingOfficerServiceService], (service: LeasingOfficerServiceService) => {
    expect(service).toBeTruthy();
  }));
});
