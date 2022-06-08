import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosProveedorComponent } from './empleados-proveedor.component';

describe('EmpleadosProveedorComponent', () => {
  let component: EmpleadosProveedorComponent;
  let fixture: ComponentFixture<EmpleadosProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadosProveedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadosProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
