import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

import { LoggedInServiceService } from 'src/app/logged-in-service.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
constructor(private router: Router,private loginService:LoginService) { }

  
  @Output() onLoginError = new EventEmitter<any>();
  @Output() onLoginSuccess = new EventEmitter<any>();
  @Output() asGuestLogin = new EventEmitter<any>();
  name:string;
  email: string;
password: string;
errorMessage

  ngOnInit() {
  }
  login() : void {
  
  //   if(this.email == 'admin' && this.password == 'admin'){
  //     this.onLoginSuccess.emit('form submitted successfully');
  //     sessionStorage.setItem('isLoggedIn', "true");  
  //     sessionStorage.setItem('username', this.email );
      
  //     this.router.navigate(["tab"]);
  //   }else {
  //     this.onLoginError.emit('Wrong data entered');
  //     alert("Invalid credentials");
  //   }
  this.loginService.getLoginData({
    email:this.email,
    password:this.password
  }).subscribe((res)=>{
    var response=JSON.parse(JSON.stringify(res))
    sessionStorage.setItem('id',response.id)
    sessionStorage.setItem('token',response.token)
    sessionStorage.setItem('isLoggedIn', "true"); 
    alert('logged in successfully')
setTimeout(()=>{
  this.router.navigate(["tab"]);
})
    
    
    
  },
  (err)=>{
    console.log(err);
    
    this.errorMessage=err.error.error
    console.log(this.errorMessage);
    
  })


   }

  redirect(){
    this.asGuestLogin.emit('logged in as a guest');
    // this.router.navigate(["tab"]);
  }
  }
