import { TestBed } from '@angular/core/testing';

import { TechnicalStuffService } from './technical-stuff.service';

describe('TechnicalStuffService', () => {
  let service: TechnicalStuffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnicalStuffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
