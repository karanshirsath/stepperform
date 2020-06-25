import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[ReactiveFormsModule, FormsModule, RouterTestingModule]
    })
    .compileComponents().then(() => {
             fixture = TestBed.createComponent(LoginComponent);
             component = fixture.componentInstance;;})
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

//import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//import { ReactiveFormsModule } from '@angular/forms';
// import { DebugElement } from '@angular/core';
// import { BrowserModule, By } from '@angular/platform-browser';
// import { RouterTestingModule } from '@angular/router/testing';

// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;
//   let de: DebugElement;
//   let el: HTMLElement;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ LoginComponent ],
//       imports: [ReactiveFormsModule,RouterTestingModule],
//       providers: []
//     })
//     .compileComponents().then(() => {
//       fixture = TestBed.createComponent(LoginComponent);
//       component = fixture.componentInstance;
//       de = fixture.debugElement.query(By.css('form'));
//       el = de.nativeElement;
//   })}));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it(`form should be invalid`, async(() => {
//     component.loginForm.controls['email'].setValue('');
//     component.loginForm.controls['password'].setValue('');
//     expect(component.loginForm.valid).toBeFalsy();
//   }));

//   it(`form should be valid`, async(() => {
//     component.loginForm.controls['email'].setValue('asd@asd.com');
//     component.loginForm.controls['password'].setValue('aadshxj');
//     expect(component.loginForm.valid).toBeTruthy();
//   }));

//   // it('form userId min test', async(() => {
//   //   component.loginForm.controls['userId'].setValue('asa');
//   //   expect(component.loginForm.controls['userId'].hasError('minlength')).toBeTruthy();
//   // }));

//   // it('form userId max test', async(() => {
//   //   component.loginForm.controls['userId'].setValue('asa');
//   //   expect(component.loginForm.controls['userId'].hasError('maxlength')).toBeFalsy();
//   // }));
//   // it('form password min test', async(() => {
//   //   component.loginForm.controls['password'].setValue('abc');
//   //   expect(component.loginForm.controls['password'].hasError('minlength')).toBeTruthy();
//   // }));
//   // it('form password max test', async(() => {
//   //   component.loginForm.controls['password'].setValue('abc');
//   //   expect(component.loginForm.controls['userId'].hasError('maxlength')).toBeFalsy();
//   // }));

//   // it(`should set submitted to true`, async(() => {
//   //   component.login();
//   //   expect(component.submitted).toBeTruthy();
//   // }));

//   // it(`should call the login method`, async(() => {
//   //   spyOn(component, 'login');
//   //   el = fixture.debugElement.query(By.css('button')).nativeElement;
//   //   el.click();
//   //   expect(component.login).toHaveBeenCalled();
//   // }));

// //   it('should emit on click', () => {
// //     spyOn(component.userInfo, 'emit');
// //     component.loginForm.controls['userId'].setValue('asd@asd.com');
// //     component.loginForm.controls['password'].setValue('aadaasa');
// //     // trigger the click
// //     // const nativeElement = fixture.nativeElement;
// //     // const button = nativeElement.querySelector('button');
// //     // button.dispatchEvent(new Event('click'));

// //     el = fixture.debugElement.query(By.css('button')).nativeElement;
// //     el.click();
 
// //     fixture.detectChanges();
 
// //     expect(component.userInfo.emit).toHaveBeenCalledWith(component.loginForm.value);
// //  });

// });


// import { LoginComponent } from './login.component';
// import { RouterTestingModule } from '@angular/router/testing';

// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ LoginComponent ],
//       imports: [RouterTestingModule]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
