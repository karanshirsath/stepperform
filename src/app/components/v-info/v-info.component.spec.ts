import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';


import { VInfoComponent } from './v-info.component';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { RouterTestingModule } from '@angular/router/testing';

describe('VInfoComponent', () => {
  let component: VInfoComponent;
  let fixture: ComponentFixture<VInfoComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VInfoComponent ],
      imports: [ReactiveFormsModule, RouterTestingModule , ],
      providers: [GoogleAnalyticsService]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(VInfoComponent);
      component = fixture.componentInstance;
      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
  })}));

  beforeEach(() => {
    fixture = TestBed.createComponent(VInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`form should be invalid if required fields are empty`, async(() => {
    component.vehicleInfoForm.controls['registrationNumber'].setValue('');
    component.vehicleInfoForm.controls['certificateNumber'].setValue('');
    component.vehicleInfoForm.controls['purpose'].setValue('');
    component.vehicleInfoForm.controls['yesNo'].setValue('');
    expect(component.vehicleInfoForm.valid).toBeFalsy();
  }));

  it(`form should be invalid if max length fields are not fulfilled`, async(() => {
    component.vehicleInfoForm.controls['registrationNumber'].setValue('2323');
    component.vehicleInfoForm.controls['certificateNumber'].setValue('123123');
    component.vehicleInfoForm.controls['purpose'].setValue('def');
    component.vehicleInfoForm.controls['yesNo'].setValue('yes');
    expect(component.vehicleInfoForm.valid).toBeFalsy();
  }));

  // it(`form should be valid`, async(() => {
  //   component.vehicleInfoForm.controls['registrationNumber'].setValue('43434343');
  //   component.vehicleInfoForm.controls['certificateNumber'].setValue('34343434');
  //   component.vehicleInfoForm.controls['purpose'].setValue('personal');
  //   component.vehicleInfoForm.controls['yesNo'].setValue('Yes');
  //   expect(component.vehicleInfoForm.valid).toBeTruthy();
  // }));

  it('form registrationNumber min test', async(() => {
    component.vehicleInfoForm.controls['registrationNumber'].setValue('asa');
    expect(component.vehicleInfoForm.controls['registrationNumber'].hasError('minlength')).toBeTruthy();
  }));

  it('form registrationNumber max test', async(() => {
    component.vehicleInfoForm.controls['registrationNumber'].setValue('asa');
    expect(component.vehicleInfoForm.controls['registrationNumber'].hasError('maxlength')).toBeFalsy();
  }));

  it('form certificateNumber min test', async(() => {
    component.vehicleInfoForm.controls['certificateNumber'].setValue('abc');
    expect(component.vehicleInfoForm.controls['certificateNumber'].hasError('minlength')).toBeTruthy();
  }));

  it('form certificateNumber max test', async(() => {
    component.vehicleInfoForm.controls['certificateNumber'].setValue('abc');
    expect(component.vehicleInfoForm.controls['certificateNumber'].hasError('maxlength')).toBeFalsy();
  }));

  // it(`should call the submit method`, async(() => {
  //   spyOn(component, 'submit');
  //   el = fixture.debugElement.query(By.css('button')).nativeElement;
  //   el.click();
  //   expect(component.submit).toHaveBeenCalled();
  // }));

//   it('should emit on click', () => {
//     spyOn(component.OnRegister, 'emit');
//     component.vehicleInfoForm.controls['registrationNumber'].setValue('43434343');
//     component.vehicleInfoForm.controls['certificateNumber'].setValue('34343434');
//     component.vehicleInfoForm.controls['purpose'].setValue('def');
//     component.vehicleInfoForm.controls['yesNo'].setValue('Yes');

//     el = fixture.debugElement.query(By.css('button')).nativeElement;
//     el.click();
 
//     fixture.detectChanges();
 
//     expect(component.OnRegister.emit).toHaveBeenCalledWith(component.vehicleInfoForm.value);
//  });

});
