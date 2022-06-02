import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCiudadComponent } from './registro-ciudad.component';

describe('RegistroCiudadComponent', () => {
  let component: RegistroCiudadComponent;
  let fixture: ComponentFixture<RegistroCiudadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroCiudadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
