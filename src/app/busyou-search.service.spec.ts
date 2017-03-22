import { TestBed, inject } from '@angular/core/testing';

import { BusyouSearchService } from './busyou-search.service';

describe('BusyouSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusyouSearchService]
    });
  });

  it('should ...', inject([BusyouSearchService], (service: BusyouSearchService) => {
    expect(service).toBeTruthy();
  }));
});
