import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseCalculateBoxComponent } from './lease-calculate-box.component';

describe('LeaseCalculateBoxComponent', () => {
  let component: LeaseCalculateBoxComponent;
  let fixture: ComponentFixture<LeaseCalculateBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaseCalculateBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaseCalculateBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
