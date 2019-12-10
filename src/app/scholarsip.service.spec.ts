import { TestBed } from '@angular/core/testing';

import { ScholarsipService } from './scholarsip.service';

describe('ScholarsipService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScholarsipService = TestBed.get(ScholarsipService);
    expect(service).toBeTruthy();
  });
});
