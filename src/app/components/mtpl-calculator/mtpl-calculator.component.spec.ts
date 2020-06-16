import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MTPLCalculatorComponent } from './mtpl-calculator.component';

describe('MTPLCalculatorComponent', () => {
  let component: MTPLCalculatorComponent;
  let fixture: ComponentFixture<MTPLCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MTPLCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MTPLCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
