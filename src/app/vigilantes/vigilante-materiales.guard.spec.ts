import { TestBed } from '@angular/core/testing';

import { VigilanteMaterialesGuard } from './vigilante-materiales.guard';

describe('VigilanteMaterialesGuard', () => {
  let guard: VigilanteMaterialesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VigilanteMaterialesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
