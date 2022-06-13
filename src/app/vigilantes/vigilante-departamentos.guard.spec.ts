import { TestBed } from '@angular/core/testing';

import { VigilanteDepartamentosGuard } from './vigilante-departamentos.guard';

describe('VigilanteDepartamentosGuard', () => {
  let guard: VigilanteDepartamentosGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VigilanteDepartamentosGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
