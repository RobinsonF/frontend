import { TestBed } from '@angular/core/testing';

import { TrazabilidadGuard } from './trazabilidad.guard';

describe('TrazabilidadGuard', () => {
  let guard: TrazabilidadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TrazabilidadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
