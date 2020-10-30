import { TestBed } from '@angular/core/testing';

import { ReqLeaveService } from './req-leave.service';

describe('ReqLeaveService', () => {
  let service: ReqLeaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReqLeaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
