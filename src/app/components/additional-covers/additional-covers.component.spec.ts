import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalCoversComponent } from './additional-covers.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AdditionalCoversComponent', () => {
  let component: AdditionalCoversComponent;
  let fixture: ComponentFixture<AdditionalCoversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalCoversComponent ],
      imports:[ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalCoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
