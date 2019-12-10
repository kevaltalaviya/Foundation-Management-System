import { TestBed } from '@angular/core/testing';

import { SummercampregistrationService } from './summercampregistration.service';

describe('SummercampregistrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SummercampregistrationService = TestBed.get(SummercampregistrationService);
    expect(service).toBeTruthy();
  });
});
