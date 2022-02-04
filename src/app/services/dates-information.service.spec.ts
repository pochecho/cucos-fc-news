import { TestBed } from '@angular/core/testing';

import { DatesInformationService } from './dates-information.service';

describe('DatesInformationService', () => {
  let service: DatesInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatesInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
