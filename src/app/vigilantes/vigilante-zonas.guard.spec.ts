import { TestBed } from '@angular/core/testing';

import { VigilanteZonasGuard } from './vigilante-zonas.guard';

describe('VigilanteZonasGuard', () => {
  let guard: VigilanteZonasGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VigilanteZonasGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
