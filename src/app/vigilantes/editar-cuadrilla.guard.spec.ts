import { TestBed } from '@angular/core/testing';

import { EditarCuadrillaGuard } from './editar-cuadrilla.guard';

describe('EditarCuadrillaGuard', () => {
  let guard: EditarCuadrillaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EditarCuadrillaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
