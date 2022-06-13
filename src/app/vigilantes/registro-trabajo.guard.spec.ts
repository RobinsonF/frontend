import { TestBed } from '@angular/core/testing';

import { RegistroTrabajoGuard } from './registro-trabajo.guard';

describe('RegistroTrabajoGuard', () => {
  let guard: RegistroTrabajoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RegistroTrabajoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
