import { TestBed } from '@angular/core/testing';

import { VigilanteDashboardPGuard } from './vigilante-dashboard-p.guard';

describe('VigilanteDashboardPGuard', () => {
  let guard: VigilanteDashboardPGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VigilanteDashboardPGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
