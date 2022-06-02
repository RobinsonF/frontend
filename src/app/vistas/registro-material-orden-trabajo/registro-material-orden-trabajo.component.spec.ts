import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroMaterialOrdenTrabajoComponent } from './registro-material-orden-trabajo.component';

describe('RegistroMaterialOrdenTrabajoComponent', () => {
  let component: RegistroMaterialOrdenTrabajoComponent;
  let fixture: ComponentFixture<RegistroMaterialOrdenTrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroMaterialOrdenTrabajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroMaterialOrdenTrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
