import { TestBed } from '@angular/core/testing';

import { RegistroOrdenPGuard } from './registro-orden-p.guard';

describe('RegistroOrdenPGuard', () => {
  let guard: RegistroOrdenPGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RegistroOrdenPGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
