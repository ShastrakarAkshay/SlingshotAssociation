import { TestBed } from '@angular/core/testing';

import { AffilationService } from './affilation.service';

describe('AffilationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AffilationService = TestBed.get(AffilationService);
    expect(service).toBeTruthy();
  });
});
