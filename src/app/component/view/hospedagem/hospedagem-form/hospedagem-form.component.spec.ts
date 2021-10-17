import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospedagemFormComponent } from './hospedagem-form.component';

describe('HospedagemFormComponent', () => {
  let component: HospedagemFormComponent;
  let fixture: ComponentFixture<HospedagemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospedagemFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospedagemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
