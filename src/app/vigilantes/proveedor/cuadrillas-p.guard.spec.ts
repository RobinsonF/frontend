import { TestBed } from '@angular/core/testing';

import { CuadrillasPGuard } from './cuadrillas-p.guard';

describe('CuadrillasPGuard', () => {
  let guard: CuadrillasPGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CuadrillasPGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
