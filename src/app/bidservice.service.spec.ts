import { TestBed } from '@angular/core/testing';

import { BidserviceService } from './bidservice.service';

describe('BidserviceService', () => {
  let service: BidserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BidserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
