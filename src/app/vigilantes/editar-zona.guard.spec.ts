import { TestBed } from '@angular/core/testing';

import { EditarZonaGuard } from './editar-zona.guard';

describe('EditarZonaGuard', () => {
  let guard: EditarZonaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EditarZonaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
