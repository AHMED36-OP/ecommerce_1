import { TestBed } from '@angular/core/testing';

import { ProudectDataService } from './proudect-data.service';

describe('ProudectDataService', () => {
  let service: ProudectDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProudectDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
