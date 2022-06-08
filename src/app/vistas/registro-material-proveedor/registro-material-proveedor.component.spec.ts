import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroMaterialProveedorComponent } from './registro-material-proveedor.component';

describe('RegistroMaterialProveedorComponent', () => {
  let component: RegistroMaterialProveedorComponent;
  let fixture: ComponentFixture<RegistroMaterialProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroMaterialProveedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroMaterialProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
