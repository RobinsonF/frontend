import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenEditarComponent } from './orden-editar.component';

describe('OrdenEditarComponent', () => {
  let component: OrdenEditarComponent;
  let fixture: ComponentFixture<OrdenEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
