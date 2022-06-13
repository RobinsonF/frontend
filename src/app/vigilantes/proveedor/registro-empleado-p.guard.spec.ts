import { TestBed } from '@angular/core/testing';

import { RegistroEmpleadoPGuard } from './registro-empleado-p.guard';

describe('RegistroEmpleadoPGuard', () => {
  let guard: RegistroEmpleadoPGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RegistroEmpleadoPGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
