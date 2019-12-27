import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mariamgame1Component } from './mariamgame1.component';

describe('Mariamgame1Component', () => {
  let component: Mariamgame1Component;
  let fixture: ComponentFixture<Mariamgame1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mariamgame1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mariamgame1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
