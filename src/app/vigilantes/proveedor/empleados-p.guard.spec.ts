import { TestBed } from '@angular/core/testing';

import { EmpleadosPGuard } from './empleados-p.guard';

describe('EmpleadosPGuard', () => {
  let guard: EmpleadosPGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmpleadosPGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
