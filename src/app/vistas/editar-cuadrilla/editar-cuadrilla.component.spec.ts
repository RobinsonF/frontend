import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCuadrillaComponent } from './editar-cuadrilla.component';

describe('EditarCuadrillaComponent', () => {
  let component: EditarCuadrillaComponent;
  let fixture: ComponentFixture<EditarCuadrillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCuadrillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCuadrillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
