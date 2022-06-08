import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadrillasProveedorComponent } from './cuadrillas-proveedor.component';

describe('CuadrillasProveedorComponent', () => {
  let component: CuadrillasProveedorComponent;
  let fixture: ComponentFixture<CuadrillasProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadrillasProveedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadrillasProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
