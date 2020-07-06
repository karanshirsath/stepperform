import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private loginService: LoginService) {}

  @Output() onLoginError = new EventEmitter<any>();
  @Output() onLoginSuccess = new EventEmitter<any>();
  @Output() asGuestLogin = new EventEmitter<any>();
  name: string;
  email: string;
  password: string;
  errorMessage;

  ngOnInit() {}
  login(): void {
    this.errorMessage=null;
    this.loginService
      .getLoginData({
        email: this.email,
        password: this.password
      })
      .subscribe(
        res => {
          const response = JSON.parse(JSON.stringify(res));
          sessionStorage.setItem('id', response.id);
          sessionStorage.setItem('token', response.token);
          sessionStorage.setItem('isLoggedIn', 'true');
          // alert('logged in successfully')
          this.name = prompt('How do you like to call you!!');
          console.log(this.name);
          if (this.name != null) {
            sessionStorage.setItem('welcomename', this.name);
          }
          else {
            sessionStorage.setItem('welcomename', '');
          }
          setTimeout(() => {
            this.router.navigate(['tab']);
          });
        },
        err => {
          console.log(err);

          this.errorMessage = err.error.error;
          console.log(this.errorMessage);
        }
      );
  }

  redirect() {
    this.asGuestLogin.emit('logged in as a guest');
    // this.router.navigate(["tab"]);
  }
}
