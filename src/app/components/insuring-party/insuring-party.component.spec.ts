
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuringPartyComponent } from './insuring-party.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('InsuringPartyComponent', () => {
  let component: InsuringPartyComponent;
  let fixture: ComponentFixture<InsuringPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuringPartyComponent ],
      imports:[RouterTestingModule,ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuringPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
