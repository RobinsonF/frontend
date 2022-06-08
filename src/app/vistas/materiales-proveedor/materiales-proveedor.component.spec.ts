import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialesProveedorComponent } from './materiales-proveedor.component';

describe('MaterialesProveedorComponent', () => {
  let component: MaterialesProveedorComponent;
  let fixture: ComponentFixture<MaterialesProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialesProveedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialesProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
