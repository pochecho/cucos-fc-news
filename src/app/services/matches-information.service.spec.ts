import { TestBed } from '@angular/core/testing';

import { MatchesInformationService } from './matches-information.service';

describe('MatchesInformationService', () => {
  let service: MatchesInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchesInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
