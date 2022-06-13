import { TestBed } from '@angular/core/testing';

import { OrdenesPGuard } from './ordenes-p.guard';

describe('OrdenesPGuard', () => {
  let guard: OrdenesPGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OrdenesPGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
