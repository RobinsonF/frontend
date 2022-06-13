import { TestBed } from '@angular/core/testing';

import { MaterialesPGuard } from './materiales-p.guard';

describe('MaterialesPGuard', () => {
  let guard: MaterialesPGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MaterialesPGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
