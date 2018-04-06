import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeasingSummaryComponent } from './leasing-summary.component';

describe('LeasingSummaryComponent', () => {
  let component: LeasingSummaryComponent;
  let fixture: ComponentFixture<LeasingSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeasingSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeasingSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
