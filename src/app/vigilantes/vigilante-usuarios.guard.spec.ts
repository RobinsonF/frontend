import { TestBed } from '@angular/core/testing';

import { VigilanteUsuariosGuard } from './vigilante-usuarios.guard';

describe('VigilanteUsuariosGuard', () => {
  let guard: VigilanteUsuariosGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VigilanteUsuariosGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
