import { TestBed } from '@angular/core/testing';

import { EditarMaterialGuard } from './editar-material.guard';

describe('EditarMaterialGuard', () => {
  let guard: EditarMaterialGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EditarMaterialGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
