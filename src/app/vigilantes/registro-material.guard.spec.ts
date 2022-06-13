import { TestBed } from '@angular/core/testing';

import { RegistroMaterialGuard } from './registro-material.guard';

describe('RegistroMaterialGuard', () => {
  let guard: RegistroMaterialGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RegistroMaterialGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
