import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseSummaryComponent } from './lease-summary.component';

describe('LeaseSummaryComponent', () => {
  let component: LeaseSummaryComponent;
  let fixture: ComponentFixture<LeaseSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaseSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaseSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
