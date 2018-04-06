import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveModuleComponent } from './approve-module.component';

describe('ApproveModuleComponent', () => {
  let component: ApproveModuleComponent;
  let fixture: ComponentFixture<ApproveModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
