import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleOwnerComponent } from './vehicle-owner.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('VehicleOwnerComponent', () => {
  let component: VehicleOwnerComponent;
  let fixture: ComponentFixture<VehicleOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleOwnerComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
