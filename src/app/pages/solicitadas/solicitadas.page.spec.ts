import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitadasPage } from './solicitadas.page';

describe('SolicitadasPage', () => {
  let component: SolicitadasPage;
  let fixture: ComponentFixture<SolicitadasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitadasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
