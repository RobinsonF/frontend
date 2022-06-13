import { TestBed } from '@angular/core/testing';

import { VigilanteOrdenesGuard } from './vigilante-ordenes.guard';

describe('VigilanteOrdenesGuard', () => {
  let guard: VigilanteOrdenesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VigilanteOrdenesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
