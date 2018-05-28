import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgHchartsComponent } from './ng-hcharts.component';

describe('NgHchartsComponent', () => {
  let component: NgHchartsComponent;
  let fixture: ComponentFixture<NgHchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgHchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgHchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
