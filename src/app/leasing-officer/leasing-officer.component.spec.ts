import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeasingOfficerComponent } from './leasing-officer.component';

describe('LeasingOfficerComponent', () => {
  let component: LeasingOfficerComponent;
  let fixture: ComponentFixture<LeasingOfficerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeasingOfficerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeasingOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
