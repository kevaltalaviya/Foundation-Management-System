import { TestBed } from '@angular/core/testing';

import { MoneydonationService } from './moneydonation.service';

describe('MoneydonationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoneydonationService = TestBed.get(MoneydonationService);
    expect(service).toBeTruthy();
  });
});
