import { TestBed } from '@angular/core/testing';

import { LogementService } from './logement.service';

describe('LogementService', () => {
  let service: LogementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
