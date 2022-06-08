import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCuadrillaProveedorComponent } from './registro-cuadrilla-proveedor.component';

describe('RegistroCuadrillaProveedorComponent', () => {
  let component: RegistroCuadrillaProveedorComponent;
  let fixture: ComponentFixture<RegistroCuadrillaProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroCuadrillaProveedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroCuadrillaProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
