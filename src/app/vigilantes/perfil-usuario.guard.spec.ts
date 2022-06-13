import { TestBed } from '@angular/core/testing';

import { PerfilUsuarioGuard } from './perfil-usuario.guard';

describe('PerfilUsuarioGuard', () => {
  let guard: PerfilUsuarioGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PerfilUsuarioGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
