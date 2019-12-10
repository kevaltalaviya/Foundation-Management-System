import { TestBed } from '@angular/core/testing';

import { AgroToolService } from './agro-tool.service';

describe('AgroToolService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgroToolService = TestBed.get(AgroToolService);
    expect(service).toBeTruthy();
  });
});
