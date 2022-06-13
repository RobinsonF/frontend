import { TestBed } from '@angular/core/testing';

import { VigilanteEmpleadosGuard } from './vigilante-empleados.guard';

describe('VigilanteEmpleadosGuard', () => {
  let guard: VigilanteEmpleadosGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VigilanteEmpleadosGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
