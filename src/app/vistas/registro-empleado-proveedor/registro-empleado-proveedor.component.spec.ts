import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEmpleadoProveedorComponent } from './registro-empleado-proveedor.component';

describe('RegistroEmpleadoProveedorComponent', () => {
  let component: RegistroEmpleadoProveedorComponent;
  let fixture: ComponentFixture<RegistroEmpleadoProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroEmpleadoProveedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroEmpleadoProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
