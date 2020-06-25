import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }

  
  @Output() onLoginError = new EventEmitter<any>();
  @Output() onLoginSuccess = new EventEmitter<any>();
  @Output() asGuestLogin = new EventEmitter<any>();

  email: string;
password: string;
  ngOnInit() {
  }
  login() : void {
  
    
    if(this.email == 'admin' && this.password == 'admin'){
      this.onLoginSuccess.emit('form submitted successfully');
      this.router.navigate(["tab"]);
    }else {
      this.onLoginError.emit('Wrong data entered');
      alert("Invalid credentials");
    }
  }

  redirect(){
    this.asGuestLogin.emit('logged in as a guest');
    this.router.navigate(["tab"]);
  }
  }
