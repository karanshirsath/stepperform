import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm:FormGroup

  constructor(private fb:FormBuilder, private router:Router) { }



  ngOnInit(): void {
    this.signUpForm=this.fb.group({
      fullName:['',[Validators.required]],
      email:['',[Validators.required,Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)]],
      password:['',[Validators.required]],
      confirmPassword:['',[Validators.required]],
      phoneNo:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]]
    },{validator:passwordValidator})
  }

  register=()=>{
    // if(this.signUpForm.value.password==this.signUpForm.value.confirmPassword){
    //   console.log(this.signUpForm.value);
    //   this.router.navigate(["/signIn"]);
    // }
    // else{
    //   alert('password should be same')
    // }
    console.log(this.signUpForm.value);
    this.router.navigate(["/signIn"]);
  }

  

}
function passwordValidator(c:AbstractControl) {
  const password=c.get('password')
  const confirmPassword=c.get('confirmPassword')
  if(password.pristine || confirmPassword.pristine){
    return null
  }
  return password.value != confirmPassword.value ? {'misMatch':true} : null
  
  
}