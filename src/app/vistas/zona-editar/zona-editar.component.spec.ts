import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaEditarComponent } from './zona-editar.component';

describe('ZonaEditarComponent', () => {
  let component: ZonaEditarComponent;
  let fixture: ComponentFixture<ZonaEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonaEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
