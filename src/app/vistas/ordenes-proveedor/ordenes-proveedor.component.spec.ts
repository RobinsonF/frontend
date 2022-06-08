import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenesProveedorComponent } from './ordenes-proveedor.component';

describe('OrdenesProveedorComponent', () => {
  let component: OrdenesProveedorComponent;
  let fixture: ComponentFixture<OrdenesProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenesProveedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenesProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
