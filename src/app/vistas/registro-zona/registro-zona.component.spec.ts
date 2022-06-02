import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroZonaComponent } from './registro-zona.component';

describe('RegistroZonaComponent', () => {
  let component: RegistroZonaComponent;
  let fixture: ComponentFixture<RegistroZonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroZonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroZonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
