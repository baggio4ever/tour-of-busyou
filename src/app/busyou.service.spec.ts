import { TestBed, inject } from '@angular/core/testing';

import { BusyouService } from './busyou.service';

describe('BusyouService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusyouService]
    });
  });

  it('should ...', inject([BusyouService], (service: BusyouService) => {
    expect(service).toBeTruthy();
  }));
});
