import { TestBed } from '@angular/core/testing';

import { RegistroMaterialPGuard } from './registro-material-p.guard';

describe('RegistroMaterialPGuard', () => {
  let guard: RegistroMaterialPGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RegistroMaterialPGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
