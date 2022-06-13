import { TestBed } from '@angular/core/testing';

import { RegistroEmpleadoGuard } from './registro-empleado.guard';

describe('RegistroEmpleadoGuard', () => {
  let guard: RegistroEmpleadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RegistroEmpleadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
