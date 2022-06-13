import { TestBed } from '@angular/core/testing';

import { RegistroDepartamentoGuard } from './registro-departamento.guard';

describe('RegistroDepartamentoGuard', () => {
  let guard: RegistroDepartamentoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RegistroDepartamentoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
