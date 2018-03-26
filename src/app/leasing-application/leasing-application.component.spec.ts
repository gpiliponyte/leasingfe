import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeasingApplicationComponent } from './leasing-application.component';
import {Input} from '@angular/core';

describe('LeasingApplicationComponent', () => {
  let component: LeasingApplicationComponent;
  let fixture: ComponentFixture<LeasingApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeasingApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeasingApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
