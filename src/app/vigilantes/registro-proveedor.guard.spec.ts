import { TestBed } from '@angular/core/testing';

import { RegistroProveedorGuard } from './registro-proveedor.guard';

describe('RegistroProveedorGuard', () => {
  let guard: RegistroProveedorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RegistroProveedorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
