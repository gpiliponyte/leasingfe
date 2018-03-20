import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeasingFormComponent } from './leasing-form.component';

describe('LeasingFormComponent', () => {
  let component: LeasingFormComponent;
  let fixture: ComponentFixture<LeasingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeasingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeasingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
