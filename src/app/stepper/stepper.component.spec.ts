import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperComponent } from './stepper.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonDataService } from '../common-data.service';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('StepperComponent', () => {
  let component: StepperComponent;
  let fixture: ComponentFixture<StepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepperComponent ],
      imports:[ReactiveFormsModule, MatSelectModule, MatFormFieldModule,
        MatInputModule, BrowserAnimationsModule],
      providers: [CommonDataService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
