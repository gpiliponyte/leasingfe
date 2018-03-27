import { TestBed, inject } from '@angular/core/testing';

import { PrivateService } from './private.service';

describe('PrivateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrivateService]
    });
  });

  it('should be created', inject([PrivateService], (service: PrivateService) => {
    expect(service).toBeTruthy();
  }));
});
