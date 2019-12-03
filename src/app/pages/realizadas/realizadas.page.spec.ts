import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizadasPage } from './realizadas.page';

describe('RealizadasPage', () => {
  let component: RealizadasPage;
  let fixture: ComponentFixture<RealizadasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealizadasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
