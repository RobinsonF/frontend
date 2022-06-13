import { TestBed } from '@angular/core/testing';

import { VigilanteCiudadesGuard } from './vigilante-ciudades.guard';

describe('VigilanteCiudadesGuard', () => {
  let guard: VigilanteCiudadesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VigilanteCiudadesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
