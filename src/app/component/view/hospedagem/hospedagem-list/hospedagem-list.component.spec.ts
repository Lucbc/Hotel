import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospedagemListComponent } from './hospedagem-list.component';

describe('HospedagemListComponent', () => {
  let component: HospedagemListComponent;
  let fixture: ComponentFixture<HospedagemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospedagemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospedagemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
