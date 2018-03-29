import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseStatusComponent } from './lease-status.component';

describe('LeaseStatusComponent', () => {
  let component: LeaseStatusComponent;
  let fixture: ComponentFixture<LeaseStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaseStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaseStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
