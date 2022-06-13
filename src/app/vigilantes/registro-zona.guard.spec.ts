import { TestBed } from '@angular/core/testing';

import { RegistroZonaGuard } from './registro-zona.guard';

describe('RegistroZonaGuard', () => {
  let guard: RegistroZonaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RegistroZonaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
