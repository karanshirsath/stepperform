import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuringPartyComponent } from './insuring-party.component';

describe('InsuringPartyComponent', () => {
  let component: InsuringPartyComponent;
  let fixture: ComponentFixture<InsuringPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuringPartyComponent ]
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
