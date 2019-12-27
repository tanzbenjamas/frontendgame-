import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemomariamComponent } from './demomariam.component';

describe('DemomariamComponent', () => {
  let component: DemomariamComponent;
  let fixture: ComponentFixture<DemomariamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemomariamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemomariamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
