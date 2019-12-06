import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndamentoPage } from './andamento.page';

describe('AndamentoPage', () => {
  let component: AndamentoPage;
  let fixture: ComponentFixture<AndamentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndamentoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
