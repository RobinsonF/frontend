import { TestBed } from '@angular/core/testing';

import { RegistroCiudadGuard } from './registro-ciudad.guard';

describe('RegistroCiudadGuard', () => {
  let guard: RegistroCiudadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RegistroCiudadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
