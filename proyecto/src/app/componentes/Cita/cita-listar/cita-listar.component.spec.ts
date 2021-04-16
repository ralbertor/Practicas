import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaListarComponent } from './cita-listar.component';

describe('CitaListarComponent', () => {
  let component: CitaListarComponent;
  let fixture: ComponentFixture<CitaListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitaListarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
