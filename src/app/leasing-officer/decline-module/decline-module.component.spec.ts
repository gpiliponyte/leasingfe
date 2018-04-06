import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclineModuleComponent } from './decline-module.component';

describe('DeclineModuleComponent', () => {
  let component: DeclineModuleComponent;
  let fixture: ComponentFixture<DeclineModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclineModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclineModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
