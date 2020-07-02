import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MTPLPolicyComponent } from './mtpl-policy.component';

describe('MTPLPolicyComponent', () => {
  let component: MTPLPolicyComponent;
  let fixture: ComponentFixture<MTPLPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MTPLPolicyComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MTPLPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
