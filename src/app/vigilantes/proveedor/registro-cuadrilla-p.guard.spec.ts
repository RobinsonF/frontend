import { TestBed } from '@angular/core/testing';

import { RegistroCuadrillaPGuard } from './registro-cuadrilla-p.guard';

describe('RegistroCuadrillaPGuard', () => {
  let guard: RegistroCuadrillaPGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RegistroCuadrillaPGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
