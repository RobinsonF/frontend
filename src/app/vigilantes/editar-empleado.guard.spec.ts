import { TestBed } from '@angular/core/testing';

import { EditarEmpleadoGuard } from './editar-empleado.guard';

describe('EditarEmpleadoGuard', () => {
  let guard: EditarEmpleadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EditarEmpleadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
