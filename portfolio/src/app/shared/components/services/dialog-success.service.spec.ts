import { TestBed } from '@angular/core/testing';

import { DialogSuccessService } from './dialog-success.service';

describe('DialogSuccessService', () => {
  let service: DialogSuccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogSuccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
