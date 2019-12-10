import { TestBed } from '@angular/core/testing';

import { SummerCampService } from './summer-camp.service';

describe('SummerCampService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SummerCampService = TestBed.get(SummerCampService);
    expect(service).toBeTruthy();
  });
});
