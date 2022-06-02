import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCuadrillaComponent } from './registro-cuadrilla.component';

describe('RegistroCuadrillaComponent', () => {
  let component: RegistroCuadrillaComponent;
  let fixture: ComponentFixture<RegistroCuadrillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroCuadrillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroCuadrillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
