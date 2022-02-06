import { TestBed } from '@angular/core/testing';

import { PublicationInformationService } from './publication-information.service';

describe('PublicationInformationService', () => {
  let service: PublicationInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicationInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
