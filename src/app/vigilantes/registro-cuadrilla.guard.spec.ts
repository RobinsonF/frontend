import { TestBed } from '@angular/core/testing';

import { RegistroCuadrillaGuard } from './registro-cuadrilla.guard';

describe('RegistroCuadrillaGuard', () => {
  let guard: RegistroCuadrillaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RegistroCuadrillaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
