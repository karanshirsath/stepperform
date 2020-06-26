import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

import { LoggedInServiceService } from 'src/app/logged-in-service.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  

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
  name:string;
  email: string;
password: string;
  ngOnInit() {
  }
  login() : void {
  
    if(this.email == 'admin' && this.password == 'admin'){
      this.onLoginSuccess.emit('form submitted successfully');
      sessionStorage.setItem('isLoggedIn', "true");  
      sessionStorage.setItem('username', this.email );
      this.name=prompt("How do you like to call you!!");
      console.log(this.name);
      if(this.name!=null)
      sessionStorage.setItem('welcomename',this.name);
      this.router.navigate(["tab"]);
    }else {
      this.onLoginError.emit('Wrong data entered');
      alert("Invalid credentials");
    }
  }

  redirect(){
    this.asGuestLogin.emit('logged in as a guest');
    // this.router.navigate(["tab"]);
  }
  }
