import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VInfoComponent } from './v-info.component';

describe('VInfoComponent', () => {
  let component: VInfoComponent;
  let fixture: ComponentFixture<VInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
