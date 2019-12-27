import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mariamgame2Component } from './mariamgame2.component';

describe('Mariamgame2Component', () => {
  let component: Mariamgame2Component;
  let fixture: ComponentFixture<Mariamgame2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mariamgame2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mariamgame2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
