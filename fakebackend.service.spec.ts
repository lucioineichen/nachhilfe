import { TestBed } from '@angular/core/testing';

import { FakebackendService } from './fakebackend.service';

describe('FakebackendService', () => {
  let service: FakebackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakebackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
