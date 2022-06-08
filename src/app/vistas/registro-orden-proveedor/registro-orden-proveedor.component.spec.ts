import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroOrdenProveedorComponent } from './registro-orden-proveedor.component';

describe('RegistroOrdenProveedorComponent', () => {
  let component: RegistroOrdenProveedorComponent;
  let fixture: ComponentFixture<RegistroOrdenProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroOrdenProveedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroOrdenProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
