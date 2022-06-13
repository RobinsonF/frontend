import { TestBed } from '@angular/core/testing';

import { EditarOrdenGuard } from './editar-orden.guard';

describe('EditarOrdenGuard', () => {
  let guard: EditarOrdenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EditarOrdenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
