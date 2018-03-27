import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseFormComponent } from './lease-form.component';

describe('LeaseFormComponent', () => {
  let component: LeaseFormComponent;
  let fixture: ComponentFixture<LeaseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
