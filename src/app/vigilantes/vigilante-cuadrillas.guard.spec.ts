import { TestBed } from '@angular/core/testing';

import { VigilanteCuadrillasGuard } from './vigilante-cuadrillas.guard';

describe('VigilanteCuadrillasGuard', () => {
  let guard: VigilanteCuadrillasGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VigilanteCuadrillasGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
